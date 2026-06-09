import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Rayquaza δ",
		fr: "Rayquaza δ",
		de: "Rayquaza"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 90,

	types: [
		"Lightning",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Guard",
				fr: "Garde Delta",
				de: "Delta-Wache"
			},
			effect: {
				en: "As long as Rayquaza has any Holon Energy cards attached to it, ignore the effect of Rayquaza's Lightning Storm attack.",
				fr: "Tant que Rayquaza possède des cartes Énergie Holon, ignorez l'effet de son attaque Orage d'éclairs.",
				de: "Solange an Rayquaza eine Holon-Energiekarte angelegt ist, ignoriere den Effekt von Rayquazas Blitzsturm Angriff."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant",
				de: "Mächtiger Schlag"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Rayquaza.",
				fr: "Inflige 10 dégâts multipliés par le nombre total d'Énergie attachée à Rayquaza.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Rayquaza angelegte Energie zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Lightning Storm",
				fr: "Orage d'éclairs",
				de: "Blitzsturm"
			},

			effect: {
				en: "Put 7 damage counters on Rayquaza.",
				fr: "Placez 7 marqueurs de dégât sur Rayquaza.",
				de: "Lege 7 Schadensmarken auf Rayquaza."
			},

			damage: 70
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
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 276776
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
