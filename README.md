# FMP-PrimeTable

## Usage

### Installation

To download and install the dependencies run the following commands:

`git clone git@github.com:ConorHaining/FMP-PrimeTable.git`
`npm install`

### To run the application

`nodejs fmpprimetable [n]`
[n] is a required argument, this is where to specify the number of primes you wish to generate.

### Testing

To test the application run the following command. This requires [Mocha](https://mochajs.org/) to be installed.
`mocha`

## Evaluation

### What I am pleased with
This is my first time using Node to write an application so I am very happy with how I was able to pick it up quickly. I am also satisfied with the level of unit testing of the application and in most cases I wrote the tests prior to writing the code.

### How I would improve
I would like to have made the Sieve of Atkins algorithm more efficient, by understanding prime gaps, I could have been able to better estimate the maximum prime value for n and make the computation more efficient. I believe I may have been able to calculate more primes this way, currently I can reach around 4 million.