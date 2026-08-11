import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Fomantis",
		fr: "Mimantis",
		es: "Fomantis",
		'es-mx': "Fomantis",
		de: "Imantis",
		it: "Fomantis",
		pt: "Fomantis"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [753],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			es: "Carga Descuidada",
			'es-mx': "Carga Temeraria",
			de: "Waghalsiger Sturmangriff",
			it: "Carica Avventata",
			pt: "Carga Indomável"
		},

		cost: ["Grass"],

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
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895791,
				tcgplayer: 704760
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895791,
				tcgplayer: 704760
			}
		},
	],
}

export default card
