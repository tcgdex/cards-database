import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		de: "Arkani",
		it: "Arcanine"
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
		it: "Growlithe"
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
				de: "Flammenwurf",
				it: "Lanciafiamme"
			},
			effect: {
				en: "Discard 1 Energy card attached to Arcanine in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Arcanin pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Arkani abgelegte  Energiekarte, um diesen Angriff auszuführen.",
				it: "Scarta una carta Energia Fuoco assegnata ad Arcanine per poter usare questo attacco."
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
				de: "Bodycheck",
				it: "Riduttore"
			},
			effect: {
				en: "Arcanine does 30 damage to itself.",
				fr: "Arcanin s'inflige 30 dégâts.",
				de: "Arkani fügt sich selbst 30 Schadenspunkte zu.",
				it: "Arcanine si infligge 30 danni."
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
		fr: "Un Pokémon très recherché pour sa grâce légendaire. Son pas élégant semble glisser sur le vent.",
		it: "Pokémon da sempre ammirato per il suo fiero aspetto. Corre con grande agilità, come se avesse le ali. LIV 45 N.59"
	},

	thirdParty: {
		cardmarket: 273718,
		tcgplayer: 42364
	}
}

export default card
