import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Mewtwo-GX",
		fr: "Mewtwo-GX",
		de: "Mewtu-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 190,
	types: [
		"Psychic",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Full Burst",
				fr: "Pleine Puissance",
				de: "Vollkraft"
			},
			effect: {
				en: "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Energien zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Absorption",
				fr: "Super Absorption",
				de: "Super-Absorber"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psystrike-GX",
				fr: "Frappe Psy-GX",
				de: "Psychostoß-GX"
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
