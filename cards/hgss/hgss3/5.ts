import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-5",
	localId: 5,

	// Card informations
	name: {
		en: "Houndoom",
		fr: "Demolosse",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/5/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/5/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/5/high.png",
		},
	},

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Fire Counterattack",
			fr: "Contre-attaque de feu",
		},
		text: {
			en: "If your opponent has any Fighting Pokémon in play, this attack does 20 damage plus 60 more damage.",
			fr: "Si votre adversaire dispose de n'importe quel Pokémon Fighting en jeu, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dark Roar",
			fr: "Cri des Ténèbres",
		},
		text: {
			en: "Your opponent discards a card from his or her hand.",
			fr: "Votre adversaire défausse une carte de sa main.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

