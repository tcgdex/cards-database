import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-85",
	localId: 85,

	// Card informations
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/85/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/85/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/85/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Tail",
			fr: "Queue Tournante",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite Off",
			fr: "Arrachage",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-{EX}, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-{EX}, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
