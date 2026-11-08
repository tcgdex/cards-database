import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Mitsuhiro Arita",

	attacks: [{
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Thunder Jolt",
			'fr-fr': "Secousse Tonnerre",
			'es-es': "Sacudida Atronadora",
			'it-it': "Scoppiotuono",
			'pt-br': "Choque do Trovão",
			'de-de': "Donnerrüttler"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this Pokémon also does 10 damage to itself.",
			'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este Pokémon também causará 10 pontos de dano a si mesmo.",
			'de-de': "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs."
	},

	dexId: [25],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576750,
				tcgplayer: 250303
			}
		},
	],
}

export default card
