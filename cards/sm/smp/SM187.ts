import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM187",
	localId: "SM187",

	// Card informations
	name: {
		en: "Alolan Marowak-GX",
		fr: "Ossatueur d’Alola-GX",
	},

	hp: 200,

	type: [
		Type.FIRE,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM187/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM187/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM187/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM187/high",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 309,
		type: AbilityType.TALENT,
		name: {
			en: "Cursed Body",
			fr: "Corps Maudit",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fiery Bone",
			fr: "Os Flamboyant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 90
	},{
		name: {
			en: "Lost Boomerang GX",
			fr: "Boomerang Perdu-GX",
		},
		text: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance. If a Pokémon is Knocked Out by this damage, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. Si un Pokémon est mis K.O. par ces dégâts, placez ce Pokémon-là et toutes les cartes qui lui sont attachées dans la Zone Perdue plutôt que dans la pile de défausse. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
