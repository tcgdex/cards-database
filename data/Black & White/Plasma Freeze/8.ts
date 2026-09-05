import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
		es: "Sceptile",
		it: "Sceptile",
		pt: "Sceptile",
		de: "Gewaldro"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
		de: "Reptain"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Bloom",
				fr: "Énergie Florissante",
				de: "Energieschwall"
			},
			effect: {
				en: "Heal 20 damage from each of your Pokémon that has any Energy attached to it.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon auquel de l'Énergie est attachée.",
				de: "Heile 20 Schadenspunkte bei jedem deiner Pokémon, an das Energie angelegt ist."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "The leaves that grow on its arms can slice down thick trees. It is without peer in jungle combat.",
		de: "Die Blätter an seinen Armen können dicke Bäume fällen. Im Dschungelkampf gibt es kein stärkeres Pokémon."
	},

	thirdParty: {
		cardmarket: 280886,
		tcgplayer: 88953
	}
}

export default card
