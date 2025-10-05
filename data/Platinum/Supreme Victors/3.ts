import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Drifblim FB",
		fr: "Grodrive ",
		de: "Drifzepeli FB"
	},
	illustrator: "Lee HyunJung",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pump Up",
				fr: "Regonfler",
				de: "Aufpumpen"
			},
			effect: {
				en: "If your opponent has 3 or less Prize cards left, Drifblim FB gets +40 HP.",
				fr: "S'il ne reste pas plus de 3 cartes Récompense à votre adversaire, Grodrive  obtient 40 PV supplémentaires.",
				de: "Solange dein Gegner weniger als 4 Preise übrig hat, erhält Drifzepeli FB +40 KP."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Ball",
				fr: "Ball'ombre",
				de: "Spukball"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. Apply Weakness and Resistance.",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 40 dégâts. Appliquez la Faiblesse et la Résistance.",
				de: "Wähle 1 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. Wende dafür Schwäche und Resistenz an."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]



}

export default card
