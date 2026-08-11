import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [734],
	set: Set,

	name: {
		en: "Yungoos",
		fr: "Manglouton",
		es: "Yungoos",
		it: "Yungoos",
		pt: "Yungoos",
		de: "Mangunior"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Although it will eat anything, it prefers fresh living things, so it marches down streets in search of prey.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691836,
				tcgplayer: 478153
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691836,
				tcgplayer: 478153
			}
		},
	],
}

export default card
