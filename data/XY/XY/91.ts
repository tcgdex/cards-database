import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Massage",
				fr: "Massage",
				es: "Masaje",
				it: "Massaggio",
				pt: "Massagem",
				de: "Massage"
			},
			effect: {
				en: "Heal 60 damage from 1 of your Benched Pokémon.",
				fr: "Soignez 60 dégâts à l'un de vos Pokémon de Banc.",
				es: "Cura 60 puntos de daño a 1 de tus Pokémon en Banca.",
				it: "Cura uno dei tuoi Pokémon in panchina da 60 danni.",
				pt: "Cure 60 de danos de 1 dos seus Pokémon no Banco.",
				de: "Heile 60 Schadenspunkte bei 1 Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slap Down",
				fr: "Aplatissement",
				es: "Bofetón Bajo",
				it: "Sganassone",
				pt: "Ataque Violento",
				de: "Niederschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40+",

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

	retreat: 2,

	thirdParty: {
		cardmarket: 281428,
		tcgplayer: 87596
	}
}

export default card
