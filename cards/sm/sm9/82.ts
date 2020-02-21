import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-82",
	localId: 82,

	// Card informations
	name: {
		en: "Lycanroc-GX",
		fr: "Lougaroc-GX",
	},

	hp: 200,

	type: [
		Type.FIGHTING,
	],

	dexId: 745,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/82/high",
		},
	},

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 661,
		type: AbilityType.TALENT,
		name: {
			en: "Twilight Eyes",
			fr: "Regard du Crépuscule",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser une Énergie attachée au Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Accelerock",
			fr: "Vif Roc",
		},
		damage: 120
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Splintered Shards-GX",
			fr: "Roches-Lames-GX",
		},
		text: {
			en: "This attack does 30 damage for each Energy card in your opponent's discard pile. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie dans la pile de défausse de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
