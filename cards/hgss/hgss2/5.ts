import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Mismagius",
		fr: "Magirêve",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/5/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/5/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/5/high",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hideaki Hakozaki",

	abilities: [{
		id: 1050,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magical Trans",
			fr: "Transfert magique",
		},
		text: {
			en: "Once during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Mismagius is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie Psychic attachée à l'un de vos Pokémon et l'attacher à un autre Pokémon. Ce pouvoir ne peut pas être utilisé si Magirêve est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Pulse",
			fr: "Vibration psy",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon se trouvant sur le Banc de votre adversaire et ayant des marqueurs de dégât. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
