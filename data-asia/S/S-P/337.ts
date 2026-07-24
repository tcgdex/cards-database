import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギダネ",
	},

	illustrator: "Julie Hang",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [1],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ゆすってあつめる",
		},

		effect: {
			en: "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
		},

	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		ja: "生まれたときから背中に植物のタネがあって少しずつ大きく育つ。.",
	},

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2022"],
			thirdParty: {
				tcgplayer: 485843
			},
		},
	],

	regulationMark: "F"
}

export default card