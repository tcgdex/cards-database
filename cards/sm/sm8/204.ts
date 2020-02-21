import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-204",
	localId: 204,

	// Card informations
	name: {
		en: "Genesect-GX",
		fr: "Genesect-GX",
	},

	hp: 180,

	type: [
		Type.METAL,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/204/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/204/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/204/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/204/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},

	abilities: [{
		id: 1241,
		type: AbilityType.TALENT,
		name: {
			en: "Double Drive",
			fr: "Double Module",
		},
		text: {
			en: "This Pokémon may have up to 2 Pokémon Tool cards attached to it. If it loses this Ability, discard Pokémon Tool cards from it until only 1 remains.",
			fr: "Jusqu’à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon. S’il perd ce talent, défaussez-en des cartes Outil Pokémon jusqu’à ce qu’il n’en reste qu’une.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Burst Shot",
			fr: "Tir en Rafale",
		},
		damage: 130
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Break Buster-GX",
			fr: "Éclat Brisé-GX",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance. (You can't use more than 1 GX attack in a game.)",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 190
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
