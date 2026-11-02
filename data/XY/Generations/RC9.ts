import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Circle Circuit",
				fr: "Cercle Électrik",
				de: "Rundparcours"
			},
			effect: {
				en: "This attack does 20 damage times the number of your Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
				de: "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 100,

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

	retreat: 0,

	description: {
		en: "The plan for today is to do nothing. My awesome tail is all curled up, and my ears are tired, too.",
		de: "Heute ist Ruhetag. Mein toller Schweif hat sich eingekringelt und meine Ohren sind auch ganz müde."
	},

	thirdParty: {
		cardmarket: 288465
	}
}

export default card
