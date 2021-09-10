import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Wormadam",
		fr: "Cheniselle",
		es: "Wormadam",
		it: "Wormadam",
		pt: "Wormadam",
		de: "Burmadame"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		413,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Solar Ray",
				fr: "Rayonnement Solaire",
				es: "Centello Solar",
				it: "Raggiosolare",
				pt: "Clarão Solar",
				de: "Sonnenstrahlen"
			},
			effect: {
				en: "Heal 20 damage from each of your Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
				es: "Cura 20 puntos de daño a cada uno de tus Pokémon.",
				it: "Cura ciascuno dei tuoi Pokémon da 20 danni.",
				pt: "Cure 20 de danos de cada um dos seus Pokémon.",
				de: "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Cutter",
				fr: "Coupe Feuille",
				es: "Hoja Cortante",
				it: "Verdetaglio",
				pt: "Folha Cortante",
				de: "Blattschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
