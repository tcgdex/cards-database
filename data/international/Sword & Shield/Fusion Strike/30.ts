import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		en: "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse."
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Supernatural Flames",
			fr: "Flammes Surnaturelles",
			de: "Übernatürliche Flammen",
			es: "Llamas Sobrenaturales",
			pt: "Chamas Sobrenaturais",
			it: "Fiamme Soprannaturali"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582164,
				tcgplayer: 253126
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582164,
				tcgplayer: 253126
			}
		},
	],
}

export default card
