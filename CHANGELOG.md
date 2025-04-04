# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 0.7.5 - 2021-07-12
## Modified
- Bump react and react-dom dependencies to support versions up to 18.

## 0.7.4 - 2020-10-08
## Bugfix
- Revert "Store extendedBlockRenderMap in state so it can be updated when readOnly changes its value (#325)" as a bug was found

## 0.7.3 - 2020-09-28
### Fixed
- Store extendedBlockRenderMap in state so it can be updated when readOnly changes its value (#325)
### Modified
- Bump http-proxy from 1.18.0 to 1.18.1
- Bump node-sass from 4.13.0 to 4.14.1
- Bump elliptic from 6.5.2 to 6.5.3 (#321)
- Bump lodash from 4.17.15 to 4.17.19
- Bump websocket-extensions from 0.1.3 to 0.1.4 (#316)

## 0.7.2 - 2020-04-14
### Fixed
- Fixed movableBlocks when readOnly is enabled

## 0.7.1 - 2020-03-26
### Fixed
- Fixed sass error
- Toolbar Left Positioning (#310)
### Modified
- Enabling movableBlocks in Website demo
- Bump acorn from 5.7.3 to 5.7.4

## 0.7.0 - 2020-03-05
### Fixed
- Mispositioning toolbar (#294)
- Avoid preventDefault in Toolbar for select input (#270)
### Modified
- Update draft-js version to 0.11.4 (#297)
- docs(overview): Improve usage docs (#301)
- Prevent `false` from being appended into Control's component className (#307)
- Remove return type annotation on method `externalKeyBindings` (#306)

## 0.6.16 - 2020-02-18
### Fixed
- Copied text with movableBlocks active has extra empty spaces on Chrome (#302)

## 0.6.15 - 2019-12-26
### Fixed
- Focus loss in plugins with react-select dependency (#288)
- Data loss when swapping plugin blocks with blur update (#286)
- Placeholder trimmed when movableBlocks prop is active (#283)

## 0.6.14 - 2019-11-30
### Added
- Add onAction function to listen to reorder blocks button clicks (#282)

## 0.6.13 - 2019-11-27
### Fixed
- Mantain the plugin block focus in edit (#276)

## 0.6.12 - 2019-11-26
### Fixed
- Sidebar error when there's no onAction prop (#276)

## 0.6.11 - 2019-11-12
### Added
- Enable reorder blocks (#272)
- Add the hability to listen sidebar/plugins actions (#273)

## 0.6.10 - 2019-10-24
### Fixed
- Bad rendering when attempting to remove a blockquote (#187)

## 0.6.9 - 2019-10-23
### Fixed
- Read only state on image block description (#262)

## 0.6.8 - 2019-10-16
### Fixed
- Read only media content (#261)

## 0.6.7 - 2019-08-08
### Fixed
- Avoiding errors when data prop is empty in atomic block (#245)

## 0.6.6 - 2019-07-31
### Added
- Allow BlockInput component to be rendered with custom `type` attribute (#244)

## 0.6.5 - 2019-05-23
### Fixed
- Conditionally prevent default on toolbar mousedown when not input (#233)
### Modified
- Allow optional shouldDisplayToolbarFn more control over rendering the toolbar (#233)
- Remove state changes in component will receive props (#233)

## 0.6.4 - 2019-05-17
### Added
- Plugins now have an error boundary so the editor won't crash on plugin errors
### Modified
- Custom actions now can handle the active state of button on toolbar (#224)

## 0.6.3 - 2018-11-21
### Fixed
- HandleBlur with timeout sets states after component unmounted (#213)
### Added
- Add optional prop "id" to MegadraftEditor (#222)

## 0.6.2 - 2018-10-09
### Fixed
- fix shouldDisplayToolbarFn #212

## 0.6.0 - 2018-10-09
### Fixed
- Fixed toolbar arrow positioning on screen edges
### Breaking Changes
- Remade internationalization, dropping support for i18next

## 0.5.2 - 2018-08-29
### Added
- Toolbar actions now can access the Editor's `onChange`.

## 0.5.1 - 2018-07-27
### Added
- `Sidebar`: Display sidebar ToggleButton only when needed, with
  `hideSidebarOnBlur` prop.
### Changed
- Improving indentation with prettier + eslint + lint-staged + husky

## 0.5.0 - 2018-07-10
### Added
- i18n: New prop `language` for `MegadraftEditor`, default is 'en-US'. `__()` has been deprecated and will be removed soon. You can move this code to your app, instead. `__()` code can be found at [Github Gist][i18n-code].

[i18n-code]: https://gist.github.com/marcelometal/768454831c0c10ee03b939187b7bebbf
### Fixed
- Toolbar: Prevent exception in Toolbar with readOnly true
- LinkInput: Fix placeholder color when URL is invalid
- Docs: Fixed toolbar customization example
- Editor: Fixes an out of sync editor state bug on plugins
- Editor: Checking if next block exists for media removal

## 0.4.37 - 2018-04-11
### Added
- Changelog.md for notable changes
### Fixed
- Fix toolbar and refactor positioning
- Refactoring sidebar positioning
- Don't prevent tab events

## 0.4.36 - 2018-03-12
### Added
- MegadraftEditor now accepts a `blockRenderFn` prop similar to draft-js to customize block components.
### Changed
- Migrated tests from mocha/chai/sinon to jest.

## 0.4.35 - 2018-03-02
### Fixed
- Toolbar is now shown after a delay of 16ms to prevent some bugs.
