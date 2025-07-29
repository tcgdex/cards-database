import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
		de: "Reptain"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Greenness",
				fr: "Verdure",
				de: "Begrünen"
			},
			effect: {
				en: "Search your deck for up to 2 Grass Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 -Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Breath",
				fr: "Haleine empoisonnée",
				de: "Gifthauch"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277942
	}
}

export default card
