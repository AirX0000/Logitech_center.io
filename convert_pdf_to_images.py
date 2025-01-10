from pdf2image import convert_from_path
import os

# Путь к PDF и папке для сохранения изображений
pdf_path = 'static/pdfs/yourfile.pdf'
output_folder = 'static/images'

# Убедитесь, что папка для изображений существует
os.makedirs(output_folder, exist_ok=True)

# Конвертация PDF в изображения
pages = convert_from_path(pdf_path, dpi=300)
for i, page in enumerate(pages):
    image_path = os.path.join(output_folder, f'page_{i + 1}.jpg')
    page.save(image_path, 'JPEG')
    print(f"Saved: {image_path}")
