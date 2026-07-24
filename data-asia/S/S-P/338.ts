import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		ja: "ウインディ",
	},

	illustrator: "REND",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [59],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ひだまりタックル",
		},

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
		},

		damage: 160
	}],

	evolveFrom: {
		ja: "ガーディ",
	},

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	description: {
		ja: "一昼夜で10000キロもの距離を走りひろる。炎を吹くと岩も粉々になる。",
	},

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2022"],
			thirdParty: {
				tcgplayer: 597503
			},
		},
	],

	regulationMark: "F"
}

export default card