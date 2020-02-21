import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW40",
	localId: "BW40",

	// Card informations
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 637,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW40/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW40/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW40/high",
		},
	},

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 781,
		type: AbilityType.TALENT,
		name: {
			en: "Scorching Scales",
			fr: "Écailles Brûlantes",
		},
		text: {
			en: "Put 4 damage counters instead of 2 on your opponent's Burned Pokémon between turns.",
			fr: "Placez 4 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burning Wind",
			fr: "Vent Torride",
		},
		text: {
			en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
