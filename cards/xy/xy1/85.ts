import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-85",
	localId: 85,

	// Card informations
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 681,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/85/high",
		},
	},

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1433,
		type: AbilityType.TALENT,
		name: {
			en: "Stance Change",
			fr: "Déclic Tactique",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch this Pokémon with an Aegislash in your hand. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger ce Pokémon avec un Exagide dans votre main. (Les cartes attachées à ce Pokémon, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu, et tous les autres effets restent sur le nouveau Pokémon.)",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Buster Swing",
			fr: "Repoussoir",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
