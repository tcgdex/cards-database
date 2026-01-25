import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		en: "Beldum",
		fr: "Terhal"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Psychic",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la famille"
		},
		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Choisissez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Psychic",
		],
		name: {
			en: "Metal Ball",
			fr: "Boule métallique"
		},
		effect: {
			en: "Put 1 damage counter on the Defending Pokémon.",
			fr: "Placez 1 marqueur de dégât sur le Pokémon Défenseur."
		}
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 83786
	}
}

export default card
