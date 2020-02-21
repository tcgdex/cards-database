import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Lurantis-GX",
		fr: "Floramantis-GX",
	},

	hp: 210,

	type: [
		Type.GRASS,
	],

	dexId: 754,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/15/high",
		},
	},

	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Flower Supply",
			fr: "Provision Florale",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Blade",
			fr: "Lame Solaire",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 120
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Chloroscythe-GX",
			fr: "Chlorofaucille-GX",
		},
		text: {
			en: "This attack does 50 damage times the amount of Grass Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies Grass attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
