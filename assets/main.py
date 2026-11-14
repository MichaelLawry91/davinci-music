from bs4 import BeautifulSoup


def remove_meta_tags(input_path, output_path):
    # Read the HTML file
    with open(input_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Find all <meta> tags and remove them from the parse tree
    meta_tags = soup.find_all('meta')
    for tag in meta_tags:
        tag.decompose()

    # Write the cleaned HTML to a new file (or overwrite the original)
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

    print(f"Successfully removed {len(meta_tags)} meta tag(s). Saved to {output_path}")


if __name__ == "__main__":
    # Replace 'index.html' with your input file and 'cleaned.html' with your output file
    remove_meta_tags('homepage.html', 'homepage-new.html')