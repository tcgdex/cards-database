import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-85",
	localId: 85,

	// Card informations
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/85/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/85/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/85/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocean",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hideaki Hakozaki",

	abilities: [{
		id: 644,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Spray Splash",
			fr: "Embruns",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Kingdra is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer un marqueur de dégât sur l'un des Pokémon de votre adversaire. Ce pouvoir ne peut pas être utilisé si Hyporoi est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Dragon Steam",
			fr: "Dragovapeur",
		},
		text: {
			en: "If your opponent has any Fire Pokémon in play, this attack's base damage is 20 instead of 60.",
			fr: "Si votre adversaire dispose de n'importe quel Pokémon Fire en jeu, cette attaque inflige 20 dégâts de base au lieu de 60.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
