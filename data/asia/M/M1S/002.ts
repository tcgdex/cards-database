import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モジャンボ"
	},
	illustrator: "REND",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	description: {
		'ja-jp': "暖かい土地で暮らすものほど、ツルの伸びが早い。伸びると自ら切って短くする。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840540,
				tcgplayer: 647259,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モンジャラ"
	},
	attacks: [{
		name: {
			'ja-jp': "すいとる"
		},
		damage: 30,
		effect: {
			'ja-jp': "このポケモンのHPを「30」回復する。"
		},
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'ja-jp': "ムキムキウィップ"
		},
		damage: "120+",
		effect: {
			'ja-jp': "このワザを使うためのエネルギーより、2個多くのエネルギーがついているなら、140ダメージ追加。"
		},
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [465]
}

export default card
