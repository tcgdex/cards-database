import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'de-de': "Qurtel"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [324],

	hp: 80,

	types: [
		"Fire"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Hot Snort",
				'fr-fr': "Grognement ardent",
				'de-de': "Hitzeschnauber"
			},
			effect: {
				'en-us': "Once during your turn, when you put Torkoal from your hand onto your Bench, you may flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous placez Chartor de votre main sur votre Banc, vous pouvez lancer une pièce. Si c’est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Qurtel von deiner Hand auf deine Bank legst, 1 Münze werfen. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Intimidation",
				'de-de': "Flackern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "You find abandoned coal mines full of them. They dig tirelessly in search of coal."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89972,
				cardmarket: 279181
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89972,
				cardmarket: 279181
			}
		},
	],

}

export default card
