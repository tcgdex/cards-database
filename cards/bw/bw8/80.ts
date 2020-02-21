import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-80",
	localId: 80,

	// Card informations
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 533,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/80/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/80/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/80/high",
		},
	},

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dynamic Punch",
			fr: "Dynamopoing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncer",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
