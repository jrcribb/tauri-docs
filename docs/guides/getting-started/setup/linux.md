---
sidebar_label: 'Linux'
pagination_next: guides/getting-started/beginning-tutorial
---

import Icon from '@theme/Icon'
import { Intro } from '@theme/SetupDocs'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setting Up Linux

<Intro />

## 1. System Dependencies&nbsp;<Icon title="alert" color="danger"/>

<Tabs
defaultValue="debian"
values={[
{label: 'Debian', value: 'debian'},
{label: 'Arch', value: 'arch'},
{label: 'Fedora', value: 'fedora'},
]}>
<TabItem value="debian">

```bash
sudo apt update && sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libappindicator3-dev \
    librsvg2-dev
```

</TabItem>
<TabItem value="arch">

```bash
sudo pacman -Syu && sudo pacman -S --needed \
    webkit2gtk \
    base-devel \
    curl \
    wget \
    openssl \
    appmenu-gtk-module \
    gtk3 \
    libappindicator-gtk3 \
    librsvg \
    libvips
```

</TabItem>
<TabItem value="fedora">

```bash
sudo dnf check-update && sudo dnf install webkit2gtk3-devel.x86_64 \
    openssl-devel \
    curl \
    wget \
    libappindicator-gtk3 \
    librsvg2-devel \
    && sudo dnf group install "C Development Tools and Libraries"
```

</TabItem>
</Tabs>

### Optional dependencies:

- `libappindicator`: needed to use the system tray feature.
- `librsvg`: needed to bundle `AppImage`.

## 2. Rustc and Cargo Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

The following command installs [rustup], the official installer for [Rust].

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

:::note
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link][rustup.sh].
:::

To make sure that Rust has been installed successfully, run the following command:

```bash
rustc --version

latest update on 2019-12-19, rust version 1.40.0
```

You may need to restart your terminal if the command does not work.

## 3. Optional Node.js Runtime and Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

The Node.js runtime and package manager are optional dependencies. You only need to install it if your frontend project depends on it or you want to start a new project using [create-tauri-app].

### Node.js (npm included)

We recommend using nvm to manage your Node.js runtime. It allows you to switch versions and update Node.js easily.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

:::note
We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a mere [download link][nvm install.sh].
:::

Once nvm is installed, close and reopen your terminal, then install the latest version of Node.js and npm:

```bash
nvm install node --latest-npm
nvm use node
```

If you have any problems with nvm, please consult their [project readme][nvm].

### Optional Node.js Package Manager

You may want to use an alternative to npm:

- [Yarn@v1] - Used by the Tauri team for v1
- [pnpm] - Alternative package manager focusing on decreasing disk space and installation time

## 4. For Windows Subsystem for Linux (WSL) Users&nbsp;<Icon title="info-alt" color="info"/>

To run a graphical application with WSL, you need to download **one** of these X servers: Xming, Cygwin X, and vcXsrv.
Since vcXsrv has been used internally, it's the one we recommend installing.

### WSL Version 1

Open the X server and then run `export DISPLAY=:0` in the terminal. You should now be able to run any graphical application via the terminal.

### WSL Version 2

You'll need to run a command that is slightly more complex than WSL 1: `export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0` and you need to add `-ac` to the X server as an argument. Note: if for some reason this command doesn't work you can use an alternative command such as: `export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | sed 's/.* //g'):0` or you can manually find the Address using `cat /etc/resolve.conf | grep nameserver`.

:::note
Don't forget that you'll have to use the "export" command anytime you want to use a graphical application for each newly opened terminal.

You can download some examples to try with `sudo apt-get install x11-apps`. xeyes is always a good one. It can be handy when troubleshooting WSL issues.
:::

## Continue

Now that you have set up the Linux-specific dependencies for Tauri, learn how to [add Tauri to your project][beginning tutorial].

[create-tauri-app]: /guides/getting-started/beginning-tutorial#1-start-a-new-tauri-project
[nvm]: https://github.com/nvm-sh/nvm
[nvm install.sh]: https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh
[beginning tutorial]: ../beginning-tutorial.md
[yarn@v1]: https://classic.yarnpkg.com/en/docs/getting-started
[pnpm]: https://pnpm.js.org/en/installation
[rustup]: https://rustup.rs/
[rust]: https://www.rust-lang.org/
[rustup.sh]: https://sh.rustup.rs/
