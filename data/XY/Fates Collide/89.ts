import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		573,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweeping Cure",
				fr: "Guérison Extensive",
				es: "Barrido Curación",
				it: "Curarapida",
				pt: "Varrida da Cura",
				de: "Fegende Heilung"
			},
			effect: {
				en: "Heal 90 damage from 1 of your Benched Pokémon.",
				fr: "Soignez 90 dégâts à l'un de vos Pokémon de Banc.",
				es: "Cura 90 puntos de daño a 1 de tus Pokémon en Banca.",
				it: "Cura uno dei tuoi Pokémon in panchina da 90 danni.",
				pt: "Cure 90 de danos de 1 dos seus Pokémon no Banco.",
				de: "Heile 90 Schadenspunkte bei 1 Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Away",
				fr: "Asticotage",
				es: "Derribar",
				it: "Scaraventa",
				pt: "Jogar Longe",
				de: "Zurückschlagen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
