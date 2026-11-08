import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "M Mewtwo EX",
		'fr-fr': "M-Mewtwo EX",
		'es-es': "M-Mewtwo EX",
		'it-it': "M Mewtwo EX",
		'pt-br': "M-Mewtwo EX",
		'de-de': "M-Mewtu EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 210,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Mewtwo-EX",
		'fr-fr': "Mewtwo-EX",
		'es-es': "Mewtwo-EX",
		'it-it': "Mewtwo-EX",
		'pt-br': "Mewtwo-EX",
		'de-de': "Mewtu-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Infinity",
				'fr-fr': "Infinité Psy",
				'es-es': "Infinidad Psíquica",
				'it-it': "Infinito Psichico",
				'pt-br': "Infinidade Psíquica",
				'de-de': "Seelische Unendlichkeit"
			},
			effect: {
				'en-us': "This attack does 30 more damage times the amount of Energy attached to both Active Pokémon. This attack's damage isn't affected by Weakness.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida a ambos Pokémon Activos. El daño de este ataque no se ve afectado por Debilidad.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata a ciascuno dei Pokémon attivi. I danni di questo attacco non sono influenzati dalla debolezza.",
				'pt-br': "Este ataque causa 30 de danos adicionais vezes a quantidade de Energia ligada a ambos os Pokémon Ativos. Os danos deste ataque não são afetados por Fraqueza.",
				'de-de': "Dieser Angriff fügt weitere 30 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu. Der Schaden dieses Angriffs wird durch Schwäche nicht verändert."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 107183
	}
}

export default card
