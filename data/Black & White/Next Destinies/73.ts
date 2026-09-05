import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		es: "Scraggy",
		it: "Scraggy",
		pt: "Scraggy",
		de: "Zurrokex"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		559,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shed Skin",
				fr: "Mue",
				de: "Expidermis"
			},
			effect: {
				en: "Heal 40 damage from this Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon.",
				de: "Heile 40 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Lunge",
				fr: "Coup Rapide",
				de: "Ausfall"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It immediately headbutts anyones that makes eye contact with it. Its skull is massively thick.",
		de: "Es hat einen dicken Schädel und versetzt jedem, mit dem sich sein Blick kreuzt, eine Kopfnuss."
	},

	thirdParty: {
		cardmarket: 280298,
		tcgplayer: 88983
	}
}

export default card
