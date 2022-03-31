import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
		es: "Golem",
		it: "Golem",
		pt: "Golem",
		de: "Geowaz"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
		es: "Graveler",
		it: "Graveler",
		pt: "Graveler",
		de: "Georok"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
				es: "Roca Afilada",
				it: "Pietrataglio",
				pt: "Gume de Pedra",
				de: "Steinkante"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
				es: "Explosión",
				it: "Esplosione",
				pt: "Explosão",
				de: "Explosion"
			},
			effect: {
				en: "This Pokémon does 100 damage to itself.",
				fr: "Ce Pokémon s'inflige 100 dégâts.",
				es: "Este Pokémon se hace 100 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 100 danni a se stesso.",
				pt: "Este Pokémon causa 100 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
