import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chimecho",
		fr: "Éoko",
		de: "Palimpalim"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heal Bell",
				fr: "Glas de soin",
				de: "Vitalglocke"
			},
			effect: {
				en: "Remove 3 damage counters from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 3 marqueurs de dégât.",
				de: "Entferne 3 Schadensmarken von jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Super Psywave",
				fr: "Super vague psy",
				de: "Super-Psywelle"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Count the amount of Energy attached to that Pokémon. Put that many damage counters on the Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Comptabilisez le nombre d'Énergies attachées à ce Pokémon. Placez autant de marqueurs de dégât sur ce Pokémon.",
				de: "Wähle 1 Pokémon deines Gegners. Zähle die Anzahl Energien, die am gewählten Pokémon angelegt sind. Lege die gleiche Anzahl Schadensmarken auf das gewählte Pokémon."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
