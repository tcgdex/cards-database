import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		de: "Blanas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		274,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dirty Trick",
				fr: "Coup en douce",
				de: "Fieser Trick"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à 1 des Pokémon de votre adversaire.",
				de: "Wirf 1 Münze. Bei 'Kopf' lege 1 Energiekarte, die an 1 gegnerisches Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Razor Wind",
				fr: "Coupe-vent",
				de: "Klingensturm"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Le son de sa flûte d'herbe déstabilise l'auditeur. Il vit au plus profond des forêts."
	}
}

export default card
