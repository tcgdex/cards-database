import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-141",
	localId: 141,

	// Card informations
	name: {
		en: "Mawile-GX",
		fr: "Mysdibule-GX",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/141/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/141/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/141/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/141/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1398,
		type: AbilityType.TALENT,
		name: {
			en: "Captivating Wink",
			fr: "Œillade Envoûtante",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may have your opponent reveal their hand and put any number of Basic Pokémon you find there onto their Bench.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez demander à votre adversaire de dévoiler sa main et de placer autant de Pokémon de base trouvés que vous voulez sur son Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Wily Bite",
			fr: "Morsure Maligne",
		},
		text: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Big Eater-GX",
			fr: "Gros Mangeur-GX",
		},
		text: {
			en: "Your opponent reveals their hand. Discard all Supporter cards you find there. (You can't use more than 1 GX attack in a game.)",
			fr: "Votre adversaire dévoile sa main. Défaussez toutes les cartes Supporter que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

