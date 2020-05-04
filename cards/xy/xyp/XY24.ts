import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY24",
	localId: "XY24",

	// Card informations
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY24/high",
		},
	},

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",

	abilities: [{
		id: 1242,
		type: AbilityType.TALENT,
		name: {
			en: "Mist Concealment",
			fr: "Voile de Brume",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon during your opponent's next turn.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez éviter tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon de votre adversaire pendant son prochain tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Bullet",
			fr: "Kunaï Sournois",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
