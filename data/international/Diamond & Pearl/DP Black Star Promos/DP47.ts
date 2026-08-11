import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Rayquaza C",
		'de-de': "Rayquaza C"
	},
	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dragon Spirit",
				'de-de': "Drachenmut"
			},
			effect: {
				'en-us': "If Rayquaza  is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza .",
				'de-de': "Wenn Rayquaza C dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält, aber nicht kampfunfähig wird, kannst du deinen Ablagestapel nach 1 Energiekarte durchsuchen und sie an Rayquaza C anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Final Blowup",
				'de-de': "Letztes Donnerwetter"
			},
			effect: {
				'en-us': "Discard all Energy attached to Rayquaza . Ignore this effect if you have no cards in your hand.",
				'de-de': "Lege alle an Rayquaza C angelegten Energien auf deinen Ablagestapel. Dieser Effekt gilt nur, wenn du mindestens 1 Handkarte hast."
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
		}
	],
}

export default card
