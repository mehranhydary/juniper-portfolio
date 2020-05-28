import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import priceIcon from "./priceIcon.svg";
import { BalanceCard, TxFeeCard, TotalCard, WalletCard } from "./Cards";

const mainStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
  priceRectangle: {
    fontFamily: "Roboto",
    minHeight: 77,
    borderRadius: 5,
    fontSize: 19,
    backgroundColor: "#daf5ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  priceIcon: {
    marginRight: 5,
  },
  priceTitle: {
    marginRight: 5,
  },
  moreInfo: {
    textTransform: "uppercase",
    textDecoration: "none",
    width: 73,
    height: 15,
    fontSize: 12,
    fontWeight: 700,
    color: "#00aeef",
    marginLeft: "1em",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: 700,
    color: "#000000",
  },
  addWalletButton: {
    width: 148,
    height: 35,
    fontFamily: "Cabin",
    fontSize: 12,
    fontWeight: 700,
    textAlign: "center",
    color: "#ffffff",
    boxShadow: "none",
  },
  walletSubtitle: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.78,
    color: "#898989",
    textTransform: "uppercase",
    marginBottom: "2em",
  },
}));

export default function () {
  const classes = mainStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.priceRectangle}>
          <img src={priceIcon} className={classes.priceIcon} />{" "}
          <b className={classes.priceTitle}>USD Price</b> = Average across three
          cryptocurrency exchanges, calculated at 12:01 pm (EST)
          <a href="#" className={classes.moreInfo}>
            More Info
          </a>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "2em" }}>
          <h1 className={classes.title}>UNICEF HQ wallet overview</h1>
        </Grid>

        <Grid item xs={12} sm={3}>
          <BalanceCard
            symbol={"ETH"}
            balanceUSD={"10,000"}
            currency={"Ether"}
            received={100}
            invested={50}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <BalanceCard
            symbol={"BTC"}
            balanceUSD={"0"}
            currency={"Bitcoin"}
            received={1}
            invested={1}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TxFeeCard
            amountUSD={"3.23"}
            amountBTC={"0.012"}
            amountETH={"0.0000321"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TotalCard received={"28,531.96"} invested={"19,287.46"} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "2em" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.addWalletButton}
          >
            Add New Wallet
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "4em" }}>
          <h3 className={classes.walletSubtitle}>3 Ethereum Wallets</h3>
        </Grid>
        <Grid item xs={6}>
          <WalletCard
            name={"Ethereum wallet test"}
            currency={"Ethereum"}
            tags={["Unicef HQ"]}
            symbol={"ETH"}
            amount={25}
            amountUSD={"4692.75"}
            address={"0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
