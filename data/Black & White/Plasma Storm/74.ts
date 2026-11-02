import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		pt: "Solrock",
		de: "Sonnfel"
	},

	illustrator: "Kouji Tajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Heat Burn",
				fr: "Chaleur Brûlante",
				de: "Brandwunde"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
				de: "Explosion"
			},
			effect: {
				en: "This Pokémon does 90 damage to itself.",
				fr: "Ce Pokémon s'inflige 90 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 90 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Solar energy is the source of its power, so it is strong during the daytime. When it spins, its body shines.",
		de: "Da es seine Energie aus Sonnenlicht gewinnt, ist es tagsüber am stärksten. Wenn es sich dreht, leuchtet es."
	},

	thirdParty: {
		cardmarket: 280814,
		tcgplayer: 89431
	}
}

export default card
