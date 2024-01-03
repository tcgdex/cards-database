import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Camerupt G",
		fr: "Camerupt ",
		de: "Camerupt G"
	},
	illustrator: "Ryota Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes calcinantes",
				de: "Sengende Flammen"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earth Power",
				fr: "Telluriforce",
				de: "Erdkräfte"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte mal der Anzahl \"Kopf\" zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
