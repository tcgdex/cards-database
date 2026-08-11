import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [384],
	set: Set,

	name: {
		'en-us': "M Rayquaza EX",
		'fr-fr': "M-Rayquaza-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "MEGA",
	suffix: "EX",

	abilities: [{
		type: "Ancient Trait",

		name: {
			'en-us': "Δ Evolution"
		},

		effect: {
			'en-us': "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Emerald Break",
			'fr-fr': "Bris'Émeraude"
		},

		effect: {
			'en-us': "This attack does 30 damage times the number of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre de vos Pokémon de Banc."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576794,
				tcgplayer: 250341
			}
		},
	],
}

export default card
