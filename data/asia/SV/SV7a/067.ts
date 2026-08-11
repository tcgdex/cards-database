import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ポワルン たいようのすがた"
	},

	illustrator: "Narano",
	category: "Pokemon",
	dexId: [351],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "晴れた 日の ポワルンの 姿。 ヒーターの前に 置く 実験では この 形に 変化しなかった。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "こがす"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "サニーアシスト"
		},

		damage: 50,

		effect: {
			'ja-jp': "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788040,
				tcgplayer: 579449,
			},
		},
	],

	retreat: 0,
	rarity: "None",
}

export default card