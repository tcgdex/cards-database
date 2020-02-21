import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-56",
	localId: 56,

	// Card informations
	name: {
		en: "Mawile",
		fr: "Mysdibule",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/56/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/56/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Selfish Draw",
			fr: "Pioche égoïste",
		},
		text: {
			en: "Look at the top card of your deck. You may put it into your hand. If not, discard it and draw a card.",
			fr: "Regardez la carte du dessus de votre deck. Vous pouvez l'ajouter à votre main.  Sinon, défaussez-la et piochez une carte.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Destructive Jaw",
			fr: "Mâchoire destructrice",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et vous devez défausser une carte Énergie qui lui est attachée.",
		},
		damage: 30
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
