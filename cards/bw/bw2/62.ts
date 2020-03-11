import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-62",
	localId: 62,

	// Card informations
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 553,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/62/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/62/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/62/high",
		},
	},

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",

	abilities: [{
		id: 222,
		type: AbilityType.TALENT,
		name: {
			en: "Black Eyes",
			fr: "Œil Noir",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Thrash",
			fr: "Mania",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
