<img src='https://user-images.githubusercontent.com/1423657/173144443-fc7ba783-d5bf-47f9-bf59-707693da5ed1.png' style="margin-left:-10px" width=250/>

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
