import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Drednaw VMAX",
		fr: "Torgamord VMAX",
		es: "Drednaw VMAX",
		it: "Drednaw VMAX",
		pt: "Drednaw VMAX",
		de: "Kamalm VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Drednaw V",
		fr: "Torgamord-V"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure",
				es: "Caparazón Sólido",
				it: "Guscio Solido",
				pt: "Carapaça Sólida",
				de: "Solider Panzer"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "G-Max Headbutt",
				fr: "Coup d’Boule G-Max",
				es: "Gigagolpe Cabeza",
				it: "Gigabottintesta",
				pt: "Cabeçada G-Max",
				de: "Giga-Kopfnuss"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 80 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu."
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
	regulationMark: "D"
}

export default card
