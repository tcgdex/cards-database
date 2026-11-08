import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フリーザー"
	},

	illustrator: "Kuroimori",
	rarity: "None",
	category: "Pokemon",
	dexId: [144],
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "氷を 自在に 操る 力を もつ。 永久凍土の 雪山に 棲んでいるという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "つめたいはばたき"
		},

		effect: {
			'ja-jp': "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'ja-jp': "アイスブラスト"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807689,
				tcgplayer: 614978,
			},
		},
	],

	retreat: 1,
}

export default card