import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-35",
	localId: 35,

	// Card informations
	name: {
		en: "Reuniclus",
		fr: "Symbios",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 579,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/35/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/35/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/35/high.png",
		},
	},

	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Link Fusion",
			fr: "Lien Fusion",
		},
		text: {
			en: "If Solosis is on your Bench, this attack does 30 more damage. If Duosion is on your Bench, this attack does 60 more damage. If Reuniclus is on your Bench, this attack does 90 more damage.",
			fr: "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires. Si Méios est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires. Si Symbios est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

