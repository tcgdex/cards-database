import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-12",
	localId: 12,

	// Card informations
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 668,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/12/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/12/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/12/high.png",
		},
	},

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 324,
		type: AbilityType.TALENT,
		name: {
			en: "Flare Command",
			fr: "Ordre Flamboyant",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Fire Energy attached to this Pokémon. If you do, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Inferno Onrush",
			fr: "Torrent d'Enfer",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

