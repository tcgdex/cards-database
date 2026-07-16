import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	dexId: [658],
	set: Set,
	illustrator: "Taiga Kasai",

	name: {
		ja: "ゲッコウガ",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "れんけいしゅりけん",
		},

		effect: {
			ja: "相手のベンチポケモン3匹にも、それぞれ10ダメージ。「ベンチは弱点・抵抗力を計算しない。」",
		},

		damage: 120
	}],

	evolveFrom: {
		ja: "ゲコガシ",
	},

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		ja: "水を圧縮して手裏剣を作り出す。高速回転させて飛ばすと金属も真っ二つ。"
	},

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2022"],
			thirdParty: {
				tcgplayer: 597504
			},
		},
	],

	regulationMark: "F"
}

export default card