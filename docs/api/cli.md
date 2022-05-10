---
id: cli
title: CLI
---

import Command from '@theme/Command'

## `info`

<Command name="info" />

```

USAGE:
    cargo-tauri info [OPTIONS]

OPTIONS:
    -h, --help       Print help information
    -v, --verbose    Enables verbose logging
    -V, --version    Print version information
```

It shows a concise list of information about the environment, Rust, Node.js and their versions as well as some relevant configurations.

:::info
This command is pretty helpful when you need to have a quick overview of your application. When requesting some help, it can be useful that you share this report with us.
:::

## `init`

<Command name="init" />

```

USAGE:
    cargo-tauri init [OPTIONS]

OPTIONS:
    -A, --app-name <APP_NAME>
            Name of your Tauri application

        --ci
            Skip prompting for values

    -d, --directory <DIRECTORY>
            Set target directory for init [default: /home/runner/work/tauri-docs/tauri-docs]

    -D, --dist-dir <DIST_DIR>
            Web assets location, relative to <project-dir>/src-tauri

    -f, --force
            Force init to overwrite the src-tauri folder

    -h, --help
            Print help information

    -l, --log
            Enables logging

    -P, --dev-path <DEV_PATH>
            Url of your dev server

    -t, --tauri-path <TAURI_PATH>
            Path of the Tauri project to use (relative to the cwd)

    -v, --verbose
            Enables verbose logging

    -V, --version
            Print version information

    -W, --window-title <WINDOW_TITLE>
            Window title of your Tauri application
```

## `plugin init`

<Command name="plugin init" />

```

USAGE:
    cargo-tauri plugin init [OPTIONS] --name <PLUGIN_NAME>

OPTIONS:
    -a, --author <AUTHOR>            Author name
        --api                        Initializes a Tauri plugin with TypeScript API
    -d, --directory <DIRECTORY>      Set target directory for init [default:
                                     /home/runner/work/tauri-docs/tauri-docs]
    -h, --help                       Print help information
    -n, --name <PLUGIN_NAME>         Name of your Tauri plugin
    -t, --tauri-path <TAURI_PATH>    Path of the Tauri project to use (relative to the cwd)
    -v, --verbose                    Enables verbose logging
    -V, --version                    Print version information
```

## `dev`

<Command name="dev" />

```

USAGE:
    cargo-tauri dev [OPTIONS] [ARGS]...

ARGS:
    <ARGS>...    Command line arguments passed to the runner

OPTIONS:
    -c, --config <CONFIG>        JSON string or path to JSON file to merge with tauri.conf.json
    -e, --exit-on-panic          Exit on panic
    -f, --features <FEATURES>    List of cargo features to activate
    -h, --help                   Print help information
    -r, --runner <RUNNER>        Binary to use to run the application
        --release                Run the code in release mode
    -t, --target <TARGET>        Target triple to build against
    -v, --verbose                Enables verbose logging
    -V, --version                Print version information
```

This command will open the WebView in development mode. It makes use of the `build.devPath` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeDevCommand` property, this one will be executed before the `dev` command.

<a href="/api/config#build">See more about the configuration.</a><br/><br/>

:::caution Troubleshooting
If you're not using `build.beforeDevCommand`, make sure your `build.devPath` is correct and, if using a development server, that it's started before using this command.
:::

## `build`

<Command name="build" />

```

USAGE:
    cargo-tauri build [OPTIONS] [ARGS]...

ARGS:
    <ARGS>...    Command line arguments passed to the runner

OPTIONS:
    -b, --bundles <BUNDLES>      List of bundles to package
    -c, --config <CONFIG>        JSON string or path to JSON file to merge with tauri.conf.json
    -d, --debug                  Builds with the debug flag
    -f, --features <FEATURES>    List of cargo features to activate
    -h, --help                   Print help information
    -r, --runner <RUNNER>        Binary to use to build the application, defaults to `cargo`
    -t, --target <TARGET>        Target triple to build against. It must be one of the values
                                 outputted by `$rustc --print target-list` or `universal-apple-
                                 darwin` for an universal macOS application. Note that compiling an
                                 universal macOS application requires both `aarch64-apple-darwin`
                                 and `x86_64-apple-darwin` targets to be installed
    -v, --verbose                Enables verbose logging
    -V, --version                Print version information
```

This command will bundle your application, either in production mode or debug mode if you used the `--debug` flag. It makes use of the `build.distDir` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeBuildCommand` property, this one will be executed before the `build` command.

<a href="/api/config#build">See more about the configuration.</a>

## `version`

<Command name="--version" />

```
  Description
    Returns the current version of tauri
```

This command will show the current version of Tauri.

## CLI usage

See more about the usage through this [complete guide](/guides/development/development-cycle).
