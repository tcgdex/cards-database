import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Rayquaza VMAX",
		'fr-fr': "Rayquaza VMAX",
		'es-es': "Rayquaza VMAX",
		'it-it': "Rayquaza VMAX",
		'pt-br': "Rayquaza VMAX",
		'de-de': "Rayquaza VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "VMAX",
	illustrator: "Anesaki Dynamic",
	dexId: [384],

	evolveFrom: {
		'en-us': "Rayquaza V",
		'fr-fr': "Rayquaza-V",
		'es-es': "Rayquaza V",
		'it-it': "Rayquaza-V",
		'pt-br': "Rayquaza V",
		'de-de': "Rayquaza-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Azure Pulse",
			'fr-fr': "Pouls Azur"
		},

		effect: {
			'en-us': "Once during your turn, you may discard your hand and draw 3 cards.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 3 cartes."
		}
	}],

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			'en-us': "Max Burst",
			'fr-fr': "Détonomax"
		},

		effect: {
			'en-us': "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser autant d'Énergies  de base ou autant d'Énergies  de base que vous le voulez de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574276,
				tcgplayer: 246733
			}
		},
	],
}

export default card
