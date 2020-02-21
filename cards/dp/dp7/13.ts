import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-13",
	localId: 13,

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Bronzong",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/13/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/13/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/13/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 565,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Cycler",
			fr: "Cycliste",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose a card from your hand and put it on top of your deck. Then, search your deck for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward. This power can't be used if Bronzong is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir une carte de votre main et la placer au dessus de votre deck. Ensuite, choisissez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Puis, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Archéodong est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Strange Spin",
			fr: "Tour étrange",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Confused.",
			fr: "Si vous possédez le même nombre de cartes que votre adversaire, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires et le Pokémon  Défenseur est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Potential",
			fr: "Lourd potentiel",
		},
		text: {
			en: "Put a number of damage counters on each of your opponent's Pokémon equal to the number of Colorless Energy in that Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
			fr: "Placez autant de marqueurs de dégât sur chacun des Pokémon de votre adversaire qu'il y a d'Énergies Colorless dans le Coût de retraite de ce Pokémon (après application des effets sur le Coût de retraite).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
