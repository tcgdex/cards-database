import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-3",
	localId: 3,

	// Card informations
	name: {
		en: "Venusaur",
		fr: "Florizarre",
	},

	hp: 160,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/3/high",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 1212,
		type: AbilityType.TALENT,
		name: {
			en: "Jungle Totem",
			fr: "Jungle Dominante",
		},
		text: {
			en: "Each basic Grass Energy attached to your Pokémon provides GrassGrass Energy. You can't apply more than 1 Jungle Totem Ability at a time.",
			fr: "Chaque Énergie Grass de base attachée à vos Pokémon fournit de l’Énergie GrassGrass. Vous ne pouvez pas utiliser plus d’un talent Jungle Dominante à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
