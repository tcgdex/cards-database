import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-11",
	localId: 11,

	// Card informations
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},

	hp: 140,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/11/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/11/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/11/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Wicked Wind",
			fr: "Vent Infernal",
		},
		text: {
			en: "Until the end of your opponent's next turn, each Stadium or Pokémon Tool card in play has no effect. (This includes cards that come into play on that turn.)",
			fr: "Jusqu’à la fin du prochain tour de votre adversaire, aucune des cartes Stade ou Outil Pokémon en jeu n’a d’effet. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extrasensory",
			fr: "Extrasenseur",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
