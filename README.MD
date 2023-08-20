# Kunlun Lab CLI

A Command Line Interface (CLI) tool designed for Kunlun Lab. This tool allows you to generate blog templates with specific date formats and structures.

## Installation

You can install the CLI globally via npm:

```bash
npm install -g <puem-lab>
```

(Note: replace `<puem-lab>` with the actual name of your npm package.)

## Usage

### Blog Command

Generates a blog template.

```bash
kunlun blog <times> [options]
```

#### Options:

- `-b, --back <arg2>`: Go back in time by a certain number of days. 

- `-f, --format <arg3>`: Format the output. Available options are 'html' for formatted HTML output or 'date' for just the date.

#### Examples:

Generate a blog template for the current date:

```bash
kunlun blog 1
```

Generate a blog template with a date from 2 days ago:

```bash
kunlun blog 1 -b 2
```

Generate an HTML formatted blog template:

```bash
kunlun blog 1 -f html
```

## License

[MIT](LICENSE.md) © [puem]

(Note: If you have a license file named `LICENSE.md`, then the above link will work. Otherwise, you can remove this section or link to wherever your license is.)

---

Make sure to replace placeholders like `<puem-lab>` and `[puem]` with actual data.