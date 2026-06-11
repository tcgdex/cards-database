import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		'es-mx': "Minccino",
		de: "Picochilla",
		it: "Minccino",
		pt: "Minccino"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [572],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Take Down",
			fr: "Bélier",
			es: "Derribo",
			'es-mx': "Derribo",
			de: "Bodycheck",
			it: "Riduttore",
			pt: "Desmantelar"
		},

		cost: ["Colorless"],
		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886464,
				tcgplayer: 693525
			}
		},
	],
}

export default card
