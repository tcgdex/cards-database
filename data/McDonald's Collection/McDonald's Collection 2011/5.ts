import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "sui",
	category: "Pokemon",

	dexId: [594],

	description: {
		en: "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
		de: "Es treibt durch den Ozean. Findet es ein verletztes Pokémon, nimmt es dieses auf und trägt es zurück an Land."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Pfund"
		},

		damage: 20
	}, {
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher"
		},

		damage: 60
	}],

	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		de: "Mamolida"
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

