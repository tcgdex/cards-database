import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Espeon-GX",
		fr: "Mentali-GX",
		de: "Psiana-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 200,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
				de: "Psystrahl"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Divide-GX",
				fr: "Scission-GX",
				de: "Division GX"
			},
			effect: {
				en: "Put 10 damage counters on your opponent's Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				fr: "Placez 10 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Verteile 10 Schadensmarken beliebig auf die Pokémon deines Gegners. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
