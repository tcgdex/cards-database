import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-21",
	localId: 21,

	// Card informations
	name: {
		en: "Mamoswine",
		fr: "Mamoswine",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 473,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/21/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/21/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/21/high",
		},
	},

	evolveFrom: {
		en: "Piloswine",
		fr: "Chochignon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ramming Strike",
			fr: "Coup collision",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads or you may start again. Each time you start again, put 2 damage counters on Mamoswine. (If Mamoswine would be Knocked Out, you can't start again.)",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces ou vous pouvez recommencer depuis le début. Chaque fois que vous recommencez, placez 2 marqueurs de dégât sur Mammochon. (Si Mammochon est mis K.O, vous ne pouvez pas recommencer.)",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Parade",
			fr: "Parade",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each Swinub on your Bench, plus 20 more damage for each Piloswine on your Bench, and 40 more damage for each Mamoswine on your Bench.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Marcacrin sur votre Banc, plus 20 dégâts supplémentaires pour chaque Cochignon sur votre Banc et 40 dégâts supplémentaires pour chaque Mammochon sur votre Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 5,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
