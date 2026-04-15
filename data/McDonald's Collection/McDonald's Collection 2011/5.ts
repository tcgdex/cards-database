import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "sui",
	category: "Pokemon",

	dexId: [594],

	description: {
		en: "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras'Face"
		},

		damage: 20
	}, {
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague"
		},

		damage: 60
	}],

	name: {
		en: "Alomomola",
		fr: "Mamanbo"
	},

	rarity: "None",
	hp: 100,
	types: ["Water"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281794,
				tcgplayer: 83507
			}
		}
	]
}

export default card