import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-84",
	localId: 84,

	// Card informations
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/84/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/84/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/84/high",
		},
	},

	evolveFrom: {
		en: "Scyther",
		fr: "Insecateur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},

	abilities: [{
		id: 69,
		type: AbilityType.POKEBODY,
		name: {
			en: "Red Armor",
			fr: "Armure rouge",
		},
		text: {
			en: "Prevent all damage done to Scizor by attacks from your opponent's Pokémon that have any Special Energy cards attached to them.",
			fr: "Évitez tous les dégâts d'attaque infligés à Cizayox par les Pokémon de votre adversaire auxquels sont attachées des cartes Énergie spéciale.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Scissors",
			fr: "Ciseaux d'acier",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each Metal Energy attached to Scizor.",
			fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Metal attachée à Cizayox.",
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

	retreat: 2,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
