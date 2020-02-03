import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-33",
	localId: 33,

	// Card informations
	name: {
		en: "Arbok",
		fr: "Arbok",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/33/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/33/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/33/high.png",
		},
	},

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Deadly Poison",
			fr: "Poison mortel",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, this attack does 10 damage plus 40 more damage. If the Defending Pokémon is not Poisoned, that Pokémon is now Poisoned.",
			fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires. Si le Pokémon Défenseur n'est pas Empoisonné, il est maintenant Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

