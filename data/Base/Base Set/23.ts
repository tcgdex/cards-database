import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		de: "Arkani"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Energy card attached to Arcanine in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Arcanin pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Arkani abgelegte  Energiekarte, um diesen Angriff auszuführen."
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Arcanine does 30 damage to itself.",
				fr: "Arcanin s'inflige 30 dégâts.",
				de: "Arkani fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon très recherché pour sa grâce légendaire. Son pas élégant semble glisser sur le vent."
	},

	thirdParty: {
		cardmarket: 273718,
		tcgplayer: 42364
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/019.ts"
		}
	]
}

export default card
