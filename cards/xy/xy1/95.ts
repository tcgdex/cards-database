import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 685,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/95/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/95/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/95/high.png",
		},
	},

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 364,
		type: AbilityType.TALENT,
		name: {
			en: "Sweet Veil",
			fr: "Gluco-Voile",
		},
		text: {
			en: "Each of your Pokémon that has any Fairy Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
			fr: "Chacun de vos Pokémon auquel de l'Énergie Fairy est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

