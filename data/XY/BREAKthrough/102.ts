import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		670,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Aromatherapy",
				fr: "Aromathérapie",
				es: "Aromaterapia",
				it: "Aromaterapia",
				pt: "Aromaterapia",
				de: "Aromakur"
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
				it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
				pt: "Cura 30 de danos de cada um dos seus Pokémon.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Magical Leaf",
				fr: "Feuille Magik",
				es: "Hoja Mágica",
				it: "Fogliamagica",
				pt: "Folha Mágica",
				de: "Zauberblatt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and heal 20 damage from this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et vous soignez 20 dégâts à ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más y cura 20 puntos de daño a este Pokémon.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più e curi questo Pokémon da 20 danni.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais e curará 20 de danos deste Pokémon.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu. Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
