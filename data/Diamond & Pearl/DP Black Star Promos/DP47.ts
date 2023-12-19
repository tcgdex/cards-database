import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Rayquaza C",
		de: "Rayquaza C"
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
				en: "Dragon Spirit",
				de: "Drachenmut"
			},
			effect: {
				en: "If Rayquaza  is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza .",
				de: "Wenn Rayquaza C dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält, aber nicht kampfunfähig wird, kannst du deinen Ablagestapel nach 1 Energiekarte durchsuchen und sie an Rayquaza C anlegen."
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
				en: "Final Blowup",
				de: "Letztes Donnerwetter"
			},
			effect: {
				en: "Discard all Energy attached to Rayquaza . Ignore this effect if you have no cards in your hand.",
				de: "Lege alle an Rayquaza C angelegten Energien auf deinen Ablagestapel. Dieser Effekt gilt nur, wenn du mindestens 1 Handkarte hast."
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




}

export default card
