import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "サーナイトex"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "サイコエンブレイス"
		},

		effect: {
			'ja-jp': "自分の番に何回でも使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンにダメカンを2個のせる。（きぜつするポケモンに、この特性は使えない。）"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'ja-jp': "ミラクルフォース"
		},

		damage: 190,

		effect: {
			'ja-jp': "このポケモンの特殊状態を、すべて回復する。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693067,
				tcgplayer: 567218,
			},
		},
	],

	retreat: 2,
}

export default card