import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Slowking",
		fr: "Roigada",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/12/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/12/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/12/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 708,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Second Sight",
			fr: "Seconde vue",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 3 cards of either player's deck and put them back on top of that player's deck in any order. This power can't be used if Slowking is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 3 cartes du dessus du deck de n’importe quel joueur et les y replacer dans l’ordre de votre choix. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyshock",
			fr: "Choc psy",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
