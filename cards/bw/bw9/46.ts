import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-46",
	localId: 46,

	// Card informations
	name: {
		en: "Muk",
		fr: "Grotadmorv",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/46/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Suction",
			fr: "Succion Empoisonnée",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, heal 60 damage from this Pokémon.",
			fr: "Si le Pokémon Défenseur est Empoisonné, soignez 60 dégâts à ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Crash",
			fr: "Flot de Vase",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
