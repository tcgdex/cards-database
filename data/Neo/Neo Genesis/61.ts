import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
		de: "Hoppspross"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hop",
				fr: "Hop",
				de: "Hüpfer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sprout",
				fr: "Pousse",
				de: "Sprössling"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Hoppip and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez un Pokémon de base nommé Granivol dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				de: "Durchsuche dein Deck nach einer Basis-Pokémon-Karte mi dem Namen Hoppspross und lege sie auf deine Bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht verwenden, wenn deine Bank voll ist."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Afin de ne pas être emportés par le vent, ils se regroupent. Toutefois, ils apprécient une légère brise."
	},

	thirdParty: {
		cardmarket: 274461
	}
}

export default card
