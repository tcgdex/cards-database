import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		de: "Groink"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Magical Step",
				fr: "Pas magique",
				de: "Zauberschnitt"
			},
			effect: {
				en: "The Defending Pokémon is now Confused. Put 6 damage counters instead of 3 on the Confused Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Confus. Placez sur le Pokémon Confus 6 marqueurs de dégât au lieu de 3.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt. Wenn wegen des Speziellen Zustands \"verwirrt\" 3 Schadensmarken auf das Verteidigende Pokémon gelegt werden sollen, lege stattdessen 6 Schadensmarken darauf."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Zermahlen"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Grumpig.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à Groret.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Groink angelegten Energien zu,"
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "Les perles noires amplifient ses pouvoirs psy. Sa danse étrange lui permet de contrôler ses ennemis."
	}
}

export default card
