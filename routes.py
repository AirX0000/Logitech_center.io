from flask import render_template, request, redirect, url_for, flash
from models import User, Course
from wtforms import Form, StringField, PasswordField
from wtforms.validators import DataRequired
from extensions import db

class LoginForm(Form):
    username = StringField('Логин', validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
def register_routes(app):
    @app.route('/')
    def home():
        return render_template('index.html')
    
    @app.route('/about')
    def about():
        return render_template('about.html')

    @app.route('/register', methods=['GET', 'POST'])
    def register():
        if request.method == 'POST':
            username = request.form['username']
            email = request.form['email']
            password = request.form['password']

            if User.query.filter_by(email=email).first():
                flash('Email уже зарегистрирован.', 'danger')
                return redirect(url_for('register'))

            new_user = User(username=username, email=email)
            new_user.set_password(password)
            db.session.add(new_user)
            db.session.commit()

            flash('Регистрация прошла успешно!', 'success')
            return redirect(url_for('home'))

        return render_template('register.html')
    @app.route('/login', methods=['GET', 'POST'])
    def login():
        form = LoginForm(request.form)  # Создаем экземпляр формы
        if request.method == 'POST' and form.validate():
            username = form.username.data
            password = form.password.data
            if username == 'admin' and password == 'password':
                return redirect(url_for('home'))  # Убедитесь, что 'home' существует в маршрутах
            else:
                return render_template('login.html', form=form, error='Неверный логин или пароль')
            return render_template('login.html', form=form)



    @app.route('/profile/<username>')
    def profile(username):
        user = User.query.filter_by(username=username).first_or_404()
        return render_template('profile.html', user=user)

    @app.route('/courses')
    def courses():
        available_courses = Course.query.all()
        return render_template('courses.html', courses=available_courses)
    
    @app.route('/testimonials')
    def testimonials():
        return render_template('testimonials.html')

    @app.route('/resources')
    def resources():
        return render_template('resources.html')
    
    @app.route('/pricing')
    def pricing():
        return render_template('pricing.html')
    
    @app.route('/events', methods=['GET'])
    def events():
        return render_template('events.html')

    @app.route('/teachers')
    def teachers():
        return render_template('teachers.html')
    
    @app.route('/blog')
    def blog():
        return render_template('blog.html')
    
    @app.route('/contacts')
    def contacts():
        return render_template('contacts.html')
    
    @app.route('/application')
    def application():
        return render_template('application.html')
    
    @app.route('/logistics-course')
    def logistics_course():
        return render_template('logistics_course.html')
    
    @app.route('/it-course')
    def it_course():
        return render_template('it_course.html')
    
    @app.route('/admin/application')
    def admin_courses():
        return render_template('admin_application.html')
    
    @app.route('/admin/contact')
    def admin_contact():
        return render_template('admin_contact.html')
    