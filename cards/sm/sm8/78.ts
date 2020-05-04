import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-78",
	localId: 78,

	// Card informations
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/78/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/78/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/78/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Satoshi Shirai",

	abilities: [{
		id: 1272,
		type: AbilityType.TALENT,
		name: {
			en: "Unseen Flash",
			fr: "Flash Invisible",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 2 Lightning Energy cards from your hand in the Lost Zone. If you do, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 cartes Énergie Lightning de votre main dans la Zone Perdue. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Split Bomb",
			fr: "Bombe Fendante",
		},
		text: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
