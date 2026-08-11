import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Froslass",
		'fr-fr': "Momartik",
		'es-es': "Froslass",
		'it-it': "Froslass",
		'pt-br': "Froslass",
		'de-de': "Frosdedje"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Studio Bora Inc.",
	dexId: [478],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Frost Over",
			'fr-fr': "Givre"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Water Energy card from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez attacher une carte Énergie  de votre pile de défausse à l'un de vos Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Crystal Breath",
			'fr-fr': "Souffle de Cristal"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It spits out cold air of nearly -60 degrees Fahrenheit to freeze its quarry. It brings frozen prey back to its lair and neatly lines them up.",
	},

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574284,
				tcgplayer: 246801
			}
		},
	],
}

export default card
