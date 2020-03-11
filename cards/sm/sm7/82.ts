import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-82",
	localId: 82,

	// Card informations
	name: {
		en: "Palossand-GX",
		fr: "Trépassable-GX",
	},

	hp: 210,

	type: [
		Type.FIGHTING,
	],

	dexId: 770,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/82/high",
		},
	},

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
	},

	tags: [
		Tag.GX,
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Eerie Light",
			fr: "Lumière Étrange",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Absorb Life",
			fr: "Absorption",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 100
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sandy Fear-gx",
			fr: "Crainte Ensablée-GX",
		},
		text: {
			en: "Look at the top 13 cards of your opponent's deck and discard any number of Pokémon you find there. This attack does 60 damage for each card you discarded in this way. Your opponent shuffles the other cards back into their deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Regardez les 13 cartes du dessus du deck de votre adversaire et défaussez-en autant de Pokémon que vous voulez. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon. Votre adversaire mélange les autres cartes avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
