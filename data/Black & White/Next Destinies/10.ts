import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		58,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stoke",
				fr: "Attisement",
				de: "Anheizen"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				de: "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-Feu",
				de: "Feuerhauch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "A Pokémon with a loyal nature, it will remain motionless until it is given an order by its Trainer.",
		de: "Ein loyales Pokémon. Es wird erst dann aktiv, wenn sein Trainer ihm Anweisungen gegeben hat."
	},

	thirdParty: {
		cardmarket: 280235,
		tcgplayer: 85961
	}
}

export default card
