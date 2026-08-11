import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハカドッグ"
	},
	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	description: {
		'ja-jp': "普段は墓場で眠っている。数いる犬ポケモンの中でもっとも主に忠実だ。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840607,
				tcgplayer: 647287,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ボチ"
	},
	attacks: [{
		name: {
			'ja-jp': "ホラーバイト"
		},
		damage: 30,
		effect: {
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、そのカードをのオモテを見て、相手の山札にもどして切る。"
		},
		cost: ["Psychic"]
	}, {
		name: {
			'ja-jp': "ぶちかます"
		},
		damage: 130,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [972]
}

export default card
