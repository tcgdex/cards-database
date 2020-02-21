import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-96",
	localId: 96,

	// Card informations
	name: {
		en: "Virizion-EX",
		fr: "Viridium ex",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 640,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 867,
		type: AbilityType.TALENT,
		name: {
			en: "Verdant Wind",
			fr: "Vent Verdoyant",
		},
		text: {
			en: "Each of your Pokémon that has any Grass Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
			fr: "Chacun de vos Pokémon auquel de l'Énergie Grass est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Emerald Slash",
			fr: "Tranche Émeraude",
		},
		text: {
			en: "You may search your deck for 2 Grass Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward.",
			fr: "Vous pouvez chercher 2 cartes Énergie Grass dans votre deck et les attacher à 1 de vos Pokémon de Banc. Mélangez ensuite votre deck.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
