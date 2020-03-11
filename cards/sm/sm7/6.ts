import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-6",
	localId: 6,

	// Card informations
	name: {
		en: "Ariados",
		fr: "Migalos",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 168,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/6/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/6/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/6/high",
		},
	},

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reactive Poison",
			fr: "Poison Réactif",
		},
		text: {
			en: "This attack does 50 more damage for each Special Condition affecting your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spider Trap",
			fr: "Piège d’Araignée",
		},
		text: {
			en: "You may switch 1 of your opponent's Benched Pokémon with their Active Pokémon. Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
