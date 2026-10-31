import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "凍てついた街"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の手札からエネルギーをポケモン（「プラズマ団」のポケモンをのぞく）につけるたび、そのポケモンにダメカンを2個のせる。"
	},

	trainerType: "Stadium",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567893, tcgplayer: 602247, cardtrader: 143024 }, stamp: ["1st-edition"] }
	]
}

export default card
