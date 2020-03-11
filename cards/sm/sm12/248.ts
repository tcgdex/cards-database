import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-248",
	localId: 248,

	// Card informations
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 508,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/248/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/248/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/248/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/248/high",
		},
	},

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 1386,
		type: AbilityType.TALENT,
		name: {
			en: "Arf Arf Bark",
			fr: "Ouaf Ouaf",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy from your opponent's Active Pokémon. If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, you may discard an Energy from your opponent's Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser une Énergie du Pokémon Actif de votre adversaire. Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez défausser une Énergie du Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Overrun",
			fr: "Dépassement",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
