import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-146",
	localId: 146,

	// Card informations
	name: {
		en: "Rayquaza C",
		fr: "Rayquaza ",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/146/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/146/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 205,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dragon Spirit",
			fr: "Esprit de dragon",
		},
		text: {
			en: "If Rayquaza C is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza C.",
			fr: "Si Rayquaza  est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts sans le mettre K.O., vous pouvez choisir dans votre pile de défausse une carte Énergie et l'attacher à Rayquaza .",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Final Blowup",
			fr: "Explosion finale",
		},
		text: {
			en: "Discard all Energy attached to Rayquaza C. Ignore this effect if you have no cards in your hand.",
			fr: "Défaussez toutes les Énergies attachées à Rayquaza . Ignorez cet effet si vous n'avez plus de cartes en main.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
