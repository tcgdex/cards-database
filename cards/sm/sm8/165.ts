import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-165",
	localId: 165,

	// Card informations
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 732,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/165/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/165/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/165/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/165/high.png",
		},
	},

	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1275,
		type: AbilityType.TALENT,
		name: {
			en: "Mountain Pass",
			fr: "Col de Montagne",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your hand, you may reveal it. If you do, look at the top card of your opponent's deck and put this Pokémon in the Lost Zone. If that card is a Supporter card, you may put it in the Lost Zone. If your opponent has no cards in their deck, you can't use this Ability.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre main, vous pouvez le montrer. Dans ce cas, regardez la carte du dessus du deck de votre adversaire et placez ce Pokémon dans la Zone Perdue. Si cette carte est une carte Supporter, vous pouvez la placer dans la Zone Perdue. Si le deck de votre adversaire ne contient aucune carte, vous ne pouvez pas utiliser ce talent.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

