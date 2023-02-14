<a href="https://qryn.dev" target="_blank"><img src='https://user-images.githubusercontent.com/1423657/218816262-e0e8d7ad-44d0-4a7d-9497-0d383ed78b83.png' width=250></a>

# LogQL Push Action

Collect and ship logs from a Github Actions workflow to a LogQL Push API ([qryn](https://qryn.metrico.in), [loki](https://grafana.com/oss/loki/))

## Usage

```yaml
some-job:
  runs-on: ubuntu-latest
  steps:
    - name: checkout
      uses: actions/checkout@v2
    - name: build
      run: this-will-fail
    - name: qryn-logs
      if: failure()
      uses: metrico/qryn-loki-logs@v1
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        endpoint: ${{ secrets.LOGQL_ENDPOINT }}
        username: ${{ secrets.LOGQL_USER }}
        password: ${{ secrets.LOGQL_PASS }}
        job-names: build
```

## Development

Install the dependencies

```bash
$ npm install
```

Lint and package it for distribution

```bash
$ npm run all
```


#### Acknowledgements

Loosely based on [elastic-logs](https://github.com/masci/elastic-logs) by [masci](https://github.com/masci)
