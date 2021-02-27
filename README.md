<h1 align="center">TERMINEX</h1>
<p align="center">
    <img width="200" alt="Alacritty Logo" src="icons/terminex-dark-square.png">
</p>

<h2 align="center">Terminex is a intuitive, simple and cross-platform terminal made using JS</h2>

<p align="center">
  <img width="600"
       alt="Terminex is a intuitive, simple and cross-platform terminal made using JS"
       src="images/terminex.png">
</p>

### Installation

Start by cloning the project from GitHub.

```terminal
git clone https://github.com/katungi/terminex.git
```

You can also download the [zip](https://github.com/katungi/terminex/archive/main.zip) and extract it to a folder called `Terminex`

#### LINUX

Open the terminex directory:

```terminal
cd terminex
```

Give the installer permissions:

```terminal
chmod +x terminex-linux-installer
```

then run it:

```terminal
sudo terminex-linux-installer
```

#### WINDOWS

If you are on windows, run the `.bat` file by right clicking it and **_running as administrator_**.
This will install all the dependencies you need to run the terminal.

### Running The Terminal

#### LINUX

Once the installation is done, you can launch Terminex from your application menu. Just search for it. You can also start it by running `Terminex` in your current terminal

#### WINDOWS

Start Terminex by running:

```terminal
npm start

```

#### RELEASE INFO

Updated and added copy and paste functionalities.
To copy use `CTRL` + `INS`
To paste use `CTRL` + `SHIFT` + `V`

- Note: You can also use `SHIFT` + `INS` to paste

We also added `right click to select` functionality among other changes.

#### Issues being worked on

- Resizing Isues on linux,
- Building a custom prompt for uniformity,
- Adding mouse events,
- Adding a menu

## Built With

- [Visual Studio Code](https://visualstudio.microsoft.com/downloads/) - Development Environment
- [Electron JS](https://www.electronjs.org/) - Development Tool
- [Hyper](https://hyper.is/) - Inspiration for the project
- [HTML/CSS](https://developer.mozilla.org/en-US/docs/Web/HTML) - UI development
- Love - Key ingredient (Naah, Just Kidding, It's JS)

## WARNING

The project was built by a coffee-high dev in 3 hours. 1 hour of coding and 2 for debugging C++ stuff He has no idea about.

Key things to know:

- I intentionally excluded `zsh` for further testing since it breaks when the user has a custom theme.
- Be kind with the critism 🥺

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

If you have **_Any_** ideas about the project, Feel free to open an issue. I have no life so I will respond almost immediately.

## Author

**Daniel Dennis** - _Initial work_ - [Other Works](https://github.com/katungi/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
