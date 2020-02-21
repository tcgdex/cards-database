import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM104",
	localId: "SM104",

	// Card informations
	name: {
		en: "Solgaleo-GX",
		fr: "Solgaleo-GX",
	},

	hp: 250,

	type: [
		Type.METAL,
	],

	dexId: 791,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM104/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM104/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM104/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.GX,
		Tag.STAGE2,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},

	abilities: [{
		id: 1198,
		type: AbilityType.TALENT,
		name: {
			en: "Shining Mane",
			fr: "Crinière Étincelante",
		},
		text: {
			en: "Your Pokémon in play have no Weakness.",
			fr: "Vos Pokémon en jeu n’ont pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Turbo Strike",
			fr: "Frappe Turbo",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 120
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Prominence GX",
			fr: "Proéminence-GX",
		},
		text: {
			en: "Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
