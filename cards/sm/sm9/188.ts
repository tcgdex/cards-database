import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-188",
	localId: 188,

	// Card informations
	name: {
		en: "Incineroar-GX",
		fr: "Félinferno-GX",
	},

	hp: 250,

	type: [
		Type.DARKNESS,
	],

	dexId: 727,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/188/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/188/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/188/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/188/high",
		},
	},

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1321,
		type: AbilityType.TALENT,
		name: {
			en: "Scar Charge",
			fr: "Recharge Balafre",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 3 damage counters on this Pokémon. If you do, search your deck for up to 3 Darkness Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 3 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez jusqu’à 3 cartes Énergie Darkness dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Punch",
			fr: "Poing Dévastateur",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkest Tornado-GX",
			fr: "Dark Rafale-GX",
		},
		text: {
			en: "This attack does 50 more damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
