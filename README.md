# CLDR Pre-Production Data

This directory contains derived data from the [CLDR](https://github.com/unicode-org/cldr.git) project.

![maven](https://github.com/unicode-org/cldr-staging/workflows/maven/badge.svg)

It also contains charts, [the HTML website summarizing the CLDR data](https://www.unicode.org/cldr/charts/latest). Read more about what the charts are in [the unicode documentation](https://cldr.unicode.org/index/charts)

## What is production data, where does it come from, why does this repo exist?

- Production data means what you get from downloads at <https://cldr.unicode.org/index/downloads>
- The [inheritance marker](https://unicode.org/reports/tr35/47/tr35.html#inheritance-marker)(`↑↑↑`) is in the source git repo. It is used to indicate that the data for a locale comes from its parent locale or language. The inheritance markers are replaced by the actual values in the production data.
- The tool GenerateProductionData can generate production data (hence the name) from the source repo.
- We use this **cldr-staging** repo to contain a copy of the production data.

## Is this repository used by the Survey Tool cldr-staging instance?

The [Survey Tool](https://cldr.unicode.org/index/survey-tool) is unrelated.

## Is this repo an official source for data?

- No. See <https://cldr.unicode.org/index/downloads> instead. This repository is guaranteed to mismatch the official download tags and zip files in certain cases.

## Can I building production zips from this repo?

- You can run `mvn package` in this directory to create production .zip files under `target/`
- in fact, though, this is run automatically, if you have permissions see the Actions tab in GitHub.

### Copyright & Licenses

Copyright © 2019-2025 Unicode, Inc. Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the United States and other countries.

A CLA is required to contribute to this project - please refer to the [CONTRIBUTING.md](https://github.com/unicode-org/.github/blob/main/.github/CONTRIBUTING.md) file (or start a Pull Request) for more information.

The contents of this repository are governed by the Unicode [Terms of Use](https://www.unicode.org/copyright.html) and are released under [LICENSE](./LICENSE).
