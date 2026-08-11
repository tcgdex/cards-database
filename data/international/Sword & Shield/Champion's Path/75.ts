import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Drednaw VMAX",
		'fr-fr': "Torgamord VMAX",
		'es-es': "Drednaw VMAX",
		'it-it': "Drednaw VMAX",
		'pt-br': "Drednaw VMAX",
		'de-de': "Kamalm VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [834],
	set: Set,
	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Drednaw V",
		'fr-fr': "Torgamord-V"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Solid Shell",
				'fr-fr': "Coquille Dure",
				'es-es': "Caparazón Sólido",
				'it-it': "Guscio Solido",
				'pt-br': "Carapaça Sólida",
				'de-de': "Solider Panzer"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "G-Max Headbutt",
				'fr-fr': "Coup d'Boule G-Max",
				'es-es': "Gigagolpe Cabeza",
				'it-it': "Gigabottintesta",
				'pt-br': "Cabeçada G-Max",
				'de-de': "Giga-Kopfnuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 80 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "160+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 500230,
		tcgplayer: 223074
	}
}

export default card
