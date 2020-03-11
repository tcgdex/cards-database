import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-80",
	localId: 80,

	// Card informations
	name: {
		en: "Marshadow-GX",
		fr: "Marshadow-GX",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 802,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/80/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/80/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1085,
		type: AbilityType.TALENT,
		name: {
			en: "Shadow Hunt",
			fr: "Chasse Dans l’Ombre",
		},
		text: {
			en: "This Pokémon can use the attacks of any Basic Pokémon in your discard pile. (You still need the necessary Energy to use each attack.)",
			fr: "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon de base dans votre pile de défausse. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Beatdown",
			fr: "Dérouillée",
		},
		damage: 120
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Peerless Hundred Blows-GX",
			fr: "Cent Coups Incomparables-GX",
		},
		text: {
			en: "This attack does 50 damage times the amount of basic Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies de base attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
