import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Toxicroak",
		fr: "Coatox",
		de: "Toxiquak",
		it: "Toxicroak",
		es: "Toxicroak",
		pt: "Toxicroak",
		'es-mx': "Toxicroak"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
		de: "Glibunkel",
		it: "Croagunk",
		es: "Croagunk",
		pt: "Croagunk",
		'es-mx': "Croagunk"
	},
	stage: "Stage1",
	dexId: [454],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			de: "Waghalsiger Sturmangriff",
			it: "Carica Avventata",
			es: "Carga Descuidada",
			pt: "Carga Indomável",
			'es-mx': "Carga Temeraria"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 20 puntos de daño a sí mismo."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654418,
		cardmarket: 851150
	}
}

export default card