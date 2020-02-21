import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-3",
	localId: 3,

	// Card informations
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/3/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/3/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/3/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},

	abilities: [{
		id: 957,
		type: AbilityType.TALENT,
		name: {
			en: "Wafting Scent",
			fr: "Senteur Flottante",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Grass Energy attached to this Pokémon. If you do, your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie Grass attachée à ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
