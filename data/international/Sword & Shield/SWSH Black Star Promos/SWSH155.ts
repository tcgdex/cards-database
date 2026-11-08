import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [658],
	set: Set,
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	stage: "V-UNION",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Greninja V-UNION",
		'fr-fr': "Amphinobi V-UNION",
		'de-de': "Quajutsu V-UNION",
		'es-es': "Greninja V-UNIÓN",
		'pt-br': "Greninja V-UNIÃO",
		'it-it': "Greninja V UNIONE"
	},

	rarity: "Promo",
	hp: 300,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ninja Body",
			'fr-fr': "Corps Ninja"
		},

		effect: {
			'en-us': "Whenever your opponent plays an Item card from their hand, prevent all effects of that card done to this Pokémon.",
			'fr-fr': "Chaque fois que votre adversaire joue une carte Objet de sa main, évitez tous les effets de cette carte sur ce Pokémon."
		}
	}, {
		type: "Ability",

		name: {
			'en-us': "Antidote Jutsu"
		},

		effect: {
			'en-us': "This Pokémon can't be Poisoned."
		}
	}, {
		type: "Ability",

		name: {
			'en-us': "Feel the Way"
		},

		effect: {
			'en-us': "Once during your turn, you may have your opponent reveal their hand."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Union Gain",
			'fr-fr': "Gain Union"
		},

		effect: {
			'en-us': "Attach up to 2 Water Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie  de votre pile de défausse à ce Pokémon."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Aqua Edge",
			'fr-fr': "Aqua-Dague"
		},

		damage: 130
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Twister Shuriken",
			'fr-fr': "Tornade de Shuriken"
		},

		effect: {
			'en-us': "This attack does 100 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 100 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Waterfall Bind",
			'fr-fr': "Entrave Cascade"
		},

		damage: 180,

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 0,

	thirdParty: {
		cardmarket: 572155
	}
}

export default card
