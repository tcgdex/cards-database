import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-138",
	localId: 138,

	// Card informations
	name: {
		en: "Zacian V",
		fr: "Zacian V",
	},

	hp: 220,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/138/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/138/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Intrepid Sword",
			fr: "Lame Indomptable",
		},
		text: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Metal Energy cards you find there to this Pokémon. Put the other cards into your hand. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis attacher à ce Pokémon le nombre voulu de cartes Énergie Metal que vous y trouvez. Ajoutez les autres cartes à votre main. Si vous utilisez ce talent, votre tour se termine.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Brave Blade",
			fr: "Lame Vaillante",
		},
		text: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
		},
		damage: 230
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
