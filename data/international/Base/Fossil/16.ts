import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptera",
		'de-de': "Aerodactyl"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Prehistoric Power",
				'fr-fr': "Arcane",
				'de-de': "Urzeit-Power"
			},
			effect: {
				'en-us': "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Aucune carte Évolution ne peut être jouée. Ce pouvoir cesse si Ptera est Endormi, Confus ou Paralysé.",
				'de-de': "Es können keine weiteren Evolutionskarten gespielt werden. Diese Fähigkeit verliert ihre Wirkung, solange Aerodactyl schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-aile",
				'de-de': "Flügelschlag"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A ferocious prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.",
		'fr-fr': "Un Pokémon préhistorique qui attaque son ennemi à la gorge avec ses crocs acérés."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273862,
				tcgplayer: 106526
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273862,
				tcgplayer: 106526
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
