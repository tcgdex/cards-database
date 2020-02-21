import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-91",
	localId: 91,

	// Card informations
	name: {
		en: "Mawile",
		fr: "Mysdibule",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mining",
			fr: "Minage",
		},
		text: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If that card is a Pokémon Tool card, instead of putting it into your hand, you may attach it to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it.",
			fr: "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Si cette carte est une carte Outil Pokémon, plutôt que de l’ajouter à votre main, vous pouvez l’attacher à l’un de vos Pokémon auquel aucun Outil Pokémon n’est attaché.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Bite Off",
			fr: "Arracher d’un Coup de Dent",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 30 more damage (before applying Weakness and Resistance).",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
