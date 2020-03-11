import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy1/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/95/high",
		},
	},

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",

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
