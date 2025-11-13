import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		de: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		'es-mx': "Pupitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		de: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		"es-mx": "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			es: "Derribo",
			de: "Bodycheck",
			it: "Riduttore",
			pt: "Desmantelar",
			'es-mx': "Derribo"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 20 puntos de daño a sí mismo."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "Scav",

	thirdParty: {
		cardmarket: 817233
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
