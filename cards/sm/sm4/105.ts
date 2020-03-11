import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-105",
	localId: 105,

	// Card informations
	name: {
		en: "Guzzlord-GX",
		fr: "Engloutyran-GX",
	},

	hp: 210,

	type: [
		Type.DARKNESS,
	],

	dexId: 799,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Eat Sloppily",
			fr: "Repas Baveux",
		},
		text: {
			en: "Discard the top 5 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tyrannical Hole",
			fr: "Trou Tyrannique",
		},
		damage: 180
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Glutton-GX",
			fr: "Gourmandise-GX",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 100
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

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
