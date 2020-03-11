import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-56",
	localId: 56,

	// Card informations
	name: {
		en: "Muk",
		fr: "Grotadmorv",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/56/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/56/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/56/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Daisuke Ito",

	abilities: [{
		id: 683,
		type: AbilityType.POKEBODY,
		name: {
			en: "Toxic Sludge",
			fr: "Boue toxik",
		},
		text: {
			en: "At the end of each player's turn, each of your opponent's Active Pokémon that has any Grass Energy attached to it is now Poisoned. If that Pokémon is already Poisoned, Toxic Sludge Poké-Body does nothing to that Pokémon.",
			fr: "À la fin du tour de chaque joueur, chacun des Pokémon Actifs de votre adversaire possédant une Énergie Grass est maintenant Empoisonné. Si ce Pokémon est déjà Empoisonné, le Poké-Body Boue toxik n'a pas d'effet sur lui.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Panic Liquid",
			fr: "Panik-liquide",
		},
		text: {
			en: "The Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
