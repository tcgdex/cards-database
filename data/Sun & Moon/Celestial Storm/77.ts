import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
		es: "Medicham",
		it: "Medicham",
		pt: "Medicham",
		de: "Meditalis"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Strike of Enlightenment",
				fr: "Frappe Révélatrice",
				es: "Golpe de Iluminación",
				it: "Colpo di Illuminazione",
				pt: "Golpe de Esclarecimento",
				de: "Schlag der Erleuchtung"
			},
			effect: {
				en: "If this Pokémon’s remaining HP is 30 or less, this attack does 160 more damage.",
				fr: "S’il reste 30 PV ou moins à ce Pokémon, cette attaque inflige 160 dégâts supplémentaires.",
				es: "Si a este Pokémon le quedan 30 PS o menos, este ataque hace 160 puntos de daño más.",
				it: "Se i PS rimanenti di questo Pokémon sono 30 o meno, questo attacco infligge 160 danni in più.",
				pt: "Se o PS restante deste Pokémon for 30 ou menos, este ataque causará 160 pontos de dano a mais.",
				de: "Wenn die verbleibenden KP dieses Pokémon 30 oder weniger betragen, fügt diese Attacke 160 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Spinning Kick",
				fr: "Coup Tournant",
				es: "Patada Giratoria",
				it: "Calcio Rotante",
				pt: "Chute Giratório",
				de: "Wirbelkick"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361322
	}
}

export default card
