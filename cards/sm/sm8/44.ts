import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-44",
	localId: 44,

	// Card informations
	name: {
		en: "Magcargo-GX",
		fr: "Volcaropod-GX",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/44/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1107,
		type: AbilityType.TALENT,
		name: {
			en: "Crushing Charge",
			fr: "Charge Écrasante",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard the top card of your deck. If it's a basic Energy card, attach it to 1 of your Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser la carte du dessus de votre deck. Si c’est une carte Énergie de base, attachez-la à l’un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Lava Flow",
			fr: "Torrent de Lave",
		},
		text: {
			en: "Discard any amount of basic Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
			fr: "Défaussez n’importe quel nombre d’Énergies de base de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Burning Magma-GX",
			fr: "Magma Brûlant-GX",
		},
		text: {
			en: "Discard the top 5 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez les 5 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
