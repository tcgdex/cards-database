import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-76",
	localId: 76,

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/76/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/76/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/76/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 811,
		type: AbilityType.TALENT,
		name: {
			en: "Heal Block",
			fr: "Anti-Soin",
		},
		text: {
			en: "Damage can't be healed from any Pokémon (both yours and your opponent's). (Damage counters can still be moved.)",
			fr: "Les dégâts ne peuvent être soignés pour aucun Pokémon (les vôtres et ceux de votre adversaire). (Les marqueurs de dégâts peuvent toujours être déplacés.)",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Oracle Inflict",
			fr: "Supplice de l'Oracle",
		},
		text: {
			en: "Does 10 more damage for each card in your opponent's hand.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
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

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
