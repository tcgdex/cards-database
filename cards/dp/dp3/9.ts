import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-9",
	localId: 9,

	// Card informations
	name: {
		en: "Gastrodon West Sea",
		fr: "Tritosor Mer Occident",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 423,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/9/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/9/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/9/high",
		},
	},

	evolveFrom: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kazuyuki Kano",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Flood",
			fr: "Inondation en furie",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on Gastrodon West Sea. Then, remove 2 damage counters from Gastrodon West Sea.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Tritosor Mer Occident. Ensuite, retirez à Tritosor Mer Occident\n 2 marqueurs de dégât.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Waves",
			fr: "Vagues énormes",
		},
		text: {
			en: "Put 1 damage counter on each Benched Pokémon (both yours and your opponent's).",
			fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
