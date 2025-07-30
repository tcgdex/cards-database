import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
		es: "Carracosta",
		it: "Carracosta",
		pt: "Carracosta",
		de: "Karippas"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		565,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Rock",
				fr: "Solide Roc",
				es: "Roca Sólida",
				it: "Solidroccia",
				pt: "Rocha Sólida",
				de: "Felskern"
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, reduce that damage by 50 (after applying Weakness and Resistance).",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, les dégâts sont réduits de 50 (après application de la Faiblesse et de la Résistance).",
				es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza una moneda. Si sale cara, reduce ese daño en 50 (después de aplicar Debilidad y Resistencia).",
				it: "Se questo Pokémon subisce danni da attacchi, lancia una moneta. Se esce testa, i danni sono ridotti di 50, dopo aver applicato debolezza e resistenza.",
				pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, reduza os danos em 50 (após aplicar Fraqueza e Resistência).",
				de: "Wirf 1 Münze, wenn diesem Pokémon durch Angriffe Schaden zugefügt wird. Bei „Kopf“ wird der Schaden um 50 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280149,
		tcgplayer: 84109
	}
}

export default card
