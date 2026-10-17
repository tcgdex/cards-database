import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ロックガード"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。"
	},

	trainerType: "Tool",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567894, tcgplayer: 602235, cardtrader: 143025 }, stamp: ["1st-edition"] }
	]
}

export default card
