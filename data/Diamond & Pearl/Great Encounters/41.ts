import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama",
		de: "Hariyama"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Palm Strike",
				fr: "Cou d'paume",
				de: "Handkantenschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spirited Throw",
				fr: "Lancer plein d'esprit",
				de: "Energischer Wurf"
			},
			effect: {
				en: "If Hariyama has fewer remaining HP than the Defending Pokémon, this attack's base damage is 80.",
				fr: "Si Hariyama possède moins de PV que le Pokémon Défenseur, les dégâts de base de cette attaque sont de 80.",
				de: "Wenn Hariyama weniger verbliebene KP hat als das Verteidigende Pokémon, beträgt der Grundschaden dieses Angriffs 80 Schadenspunkte."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277943,
		tcgplayer: 86014
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
