import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-83",
	localId: 83,

	// Card informations
	name: {
		en: "Minior",
		fr: "Météno",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 774,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

	abilities: [{
		id: 1174,
		type: AbilityType.TALENT,
		name: {
			en: "Falling Star",
			fr: "Étoile Déchue",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your hand and your Bench isn't full, you may move your Active Pokémon to your Bench and play this Pokémon as your new Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez ce Pokémon dans votre main et si votre Banc n’est pas plein, vous pouvez déplacer votre Pokémon Actif vers votre Banc et jouer ce Pokémon comme nouveau Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Swift",
			fr: "Météores",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
