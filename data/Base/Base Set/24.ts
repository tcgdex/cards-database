import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo",
		it: "Charmeleon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		it: "Charmander"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer",
				it: "Lacerazione"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf",
				it: "Lanciafiamme"
			},
			effect: {
				en: "Discard 1 Energy card attached to Charmeleon in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Reptincel pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Glutexo abgelegte  Energiekarte, um diesen Angriff auszuführen.",
				it: "Scarta una carta Energia Fuoco assegnata a Charmeleon per poter usare questo attacco."
			},
			damage: 50,

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
		fr: "En agitant sa queue, il peut élever le niveau de la température à un degré incroyable.",
		it: "Quando rotea la coda incandescente, aumenta la temperatura a livelli insopportabilmente alti. LIV 32 N.5"
	},

	thirdParty: {
		cardmarket: 273719,
		tcgplayer: 42365
	}
}

export default card
