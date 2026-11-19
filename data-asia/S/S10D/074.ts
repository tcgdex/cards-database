import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "オリジンディアルガV"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [483],
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "メタルコーティング"
		},

		effect: {
			ja: "自分のトラッシュから{M}エネルギーを2枚まで選び、このポケモンにつける。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "じかんだんぜつ"
		},

		damage: 180,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651316,
				tcgplayer: 569829,
				cardtrader: 234215,
			},
		},
	]
}

export default card
