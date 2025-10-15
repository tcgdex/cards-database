import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		de: "Heiteira"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Link",
				fr: "Chaîne d’énergie",
				de: "Energie-Verbindung"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Blissey.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie et attachez-la à Leuphorie.",
				de: "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Heiteira an."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Risikotackle"
			},
			effect: {
				en: "Blissey does 40 damage to itself.",
				fr: "Leuphorie s’inflige 40 dégâts.",
				de: "Heiteira fügt sich selbst 40 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Anyone who takes even one taste of Blissey’s egg becomes unfailingly caring and pleasant to everyone."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279008,
		tcgplayer: 83923
	}
}

export default card
