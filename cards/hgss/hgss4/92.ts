import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Celebi",
		fr: "Celebi",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/92/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/92/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 118,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Forest Breath",
			fr: "Souffle forestier",
		},
		text: {
			en: "Once during your turn (before your attack), if Celebi is your Active Pokémon, you may attach a Grass Energy card from your hand to 1 of your Pokémon. This power can't be used if Celebi is affected by a Special Condition.",
			fr: "Une fois pendant votre tour (avant votre attaque), si Celebi est votre Pokémon Actif, vous pouvez attacher une carte Énergie Grass de votre main à l'un de vos Pokémon. Ce Poké-Power ne peut pas être utilisé si Celebi est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Time Circle",
			fr: "Cycle temporel",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to Celebi by attacks from your opponent's Stage 1 or Stage 2 Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, prévenez tous les dégâts infligés à Celebi par le Pokémon de niveau 1 ou 2 de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

