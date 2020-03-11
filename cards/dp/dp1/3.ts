import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Electivire",
		fr: "Elekable",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/3/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/3/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/3/high",
		},
	},

	evolveFrom: {
		en: "Electabuzz",
		fr: "Elektek",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Nakaoka",

	abilities: [{
		id: 5,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Intense Voltage",
			fr: "Voltage intense",
		},
		text: {
			en: "As often as you like during your turn (before your attack), if Elekid is anywhere under Electivire, you may move a Lightning Energy attached to 1 of your Pokémon to Electivire. This power can't be used if Electivire is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), si Elekid se trouve sous Elekable, vous pouvez déplacer une Énergie Lightning attachée à votre Pokémon et la placer sur Elekable. Ce pouvoir ne peut pas être utilisé si Elekable est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
		},
		text: {
			en: "You may discard all  Lightning Energy attached to Electivire. If you do, this attack's base damage is 120 instead of 60.",
			fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à Elekable. Les dégâts de base de cette attaque sont alors de 120 au lieu de 60.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
