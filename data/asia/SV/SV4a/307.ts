import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドードー",
		'zh-tw': "嘟嘟",
		'id-id': "Doduo"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [84],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "２つの 頭の 脳みそは テレパシーのような 力で 気持ちを 通じ合わせているらしい。",
		'zh-tw': "２個腦袋好像會用類似心靈感應的力量， 來傳遞彼此的想法。",
		'id-id': "Kabarnya otak pada 2 kepala Doduo saling menyalurkan perasaan dengan kekuatan yang seperti telepati."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "とつげき",
			'zh-tw': "突擊",
			'id-id': "Menyerang"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747661,
				tcgplayer: 567708,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card