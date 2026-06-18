import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Jolt",
			fr: "Secousse Tonnerre",
			es: "Sacudida Atronadora",
			it: "Scoppiotuono",
			pt: "Choque do Trovão",
			de: "Donnerrüttler"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "This Pokémon generates electricity by contracting its muscles. Excited trembling is a sign that Shinx is generating a tremendous amount of electricity.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691757,
				tcgplayer: 478144
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691757,
				tcgplayer: 478144
			}
		},
	],
}

export default card
