import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Manectric G",
		fr: "Élecsprint ",
		de: "Voltenso G"
	},
	illustrator: "Ryota Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{

			name: {
				en: "Energy Absorption",
				fr: "Absorption d'énergie",
				de: "Energieaufnahme"
			},
			effect: {
				en: "Search your discard pile for up to 2 Energy cards and attach them to Manectric G.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à Elecsprint .",
				de: "Durchsuche deinen Ablagestapel nach bis zu 2 Energiekarten und lege sie an Voltenso G an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Fang",
				fr: "Crocs Éclair",
				de: "Donnerzahn"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
