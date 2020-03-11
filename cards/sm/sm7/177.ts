import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-177",
	localId: 177,

	// Card informations
	name: {
		en: "Rayquaza-GX",
		fr: "Rayquaza-GX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/177/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/177/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/177/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/177/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1178,
		type: AbilityType.TALENT,
		name: {
			en: "Stormy Winds",
			fr: "Vents Orageux",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top 3 cards of your deck. If you do, attach a basic Energy card from your discard pile to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser les 3 cartes du dessus de votre deck. Dans ce cas, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Break",
			fr: "Dragon Destructeur",
		},
		text: {
			en: "This attack does 30 damage times the amount of basic Grass and basic Lightning Energy attached to your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies Grass de base et d’Énergies Lightning de base attachées à vos Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tempest-GX",
			fr: "Déchaînement-GX",
		},
		text: {
			en: "Discard your hand and draw 10 cards. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez votre main et piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
