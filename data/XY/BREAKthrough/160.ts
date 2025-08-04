import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Mewtwo EX",
		fr: "M-Mewtwo EX",
		es: "M-Mewtwo EX",
		it: "M Mewtwo EX",
		pt: "M-Mewtwo EX",
		de: "M-Mewtu EX"
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
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
		es: "Mewtwo-EX",
		it: "Mewtwo-EX",
		pt: "Mewtwo-EX",
		de: "Mewtu-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Infinity",
				fr: "Infinité Psy",
				es: "Infinidad Psíquica",
				it: "Infinito Psichico",
				pt: "Infinidade Psíquica",
				de: "Seelische Unendlichkeit"
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to both Active Pokémon. This attack's damage isn't affected by Weakness.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida a ambos Pokémon Activos. El daño de este ataque no se ve afectado por Debilidad.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata a ciascuno dei Pokémon attivi. I danni di questo attacco non sono influenzati dalla debolezza.",
				pt: "Este ataque causa 30 de danos adicionais vezes a quantidade de Energia ligada a ambos os Pokémon Ativos. Os danos deste ataque não são afetados por Fraqueza.",
				de: "Dieser Angriff fügt weitere 30 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu. Der Schaden dieses Angriffs wird durch Schwäche nicht verändert."
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
		tcgplayer: 107279
	}
}

export default card
