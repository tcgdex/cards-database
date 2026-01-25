import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [658],
	set: Set,
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	stage: "V-UNION",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Greninja V-UNION",
		fr: "Amphinobi V-UNION",
		de: "Quajutsu V-UNION",
		es: "Greninja V-UNIÓN",
		pt: "Greninja V-UNIÃO",
		it: "Greninja V UNIONE"
	},

	rarity: "None",
	hp: 300,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Ninja Body",
			fr: "Corps Ninja"
		},

		effect: {
			en: "Whenever your opponent plays an Item card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Objet de sa main, évitez tous les effets de cette carte sur ce Pokémon."
		}
	}, {
		type: "Ability",

		name: {
			en: "Antidote Jutsu"
		},

		effect: {
			en: "This Pokémon can't be Poisoned."
		}
	}, {
		type: "Ability",

		name: {
			en: "Feel the Way"
		},

		effect: {
			en: "Once during your turn, you may have your opponent reveal their hand."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Union Gain",
			fr: "Gain Union"
		},

		effect: {
			en: "Attach up to 2 Water Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie  de votre pile de défausse à ce Pokémon."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague"
		},

		damage: 130
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Twister Shuriken",
			fr: "Tornade de Shuriken"
		},

		effect: {
			en: "This attack does 100 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Waterfall Bind",
			fr: "Entrave Cascade"
		},

		damage: 180,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
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
