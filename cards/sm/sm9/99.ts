import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-99",
	localId: 99,

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/99/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/99/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HYOGONOSUKE",

	abilities: [{
		id: 1344,
		type: AbilityType.TALENT,
		name: {
			en: "Stellar Wish",
			fr: "Souhait Stellaire",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may look at the top 5 cards of your deck, reveal a Trainer card you find there, and put it into your hand. Then, shuffle the other cards back into your deck, and this Pokémon is now Asleep.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez regarder les 5 cartes du dessus de votre deck, montrer une carte Dresseur que vous y trouvez, puis l’ajouter à votre main. Ensuite, mélangez les autres cartes avec votre deck, et ce Pokémon est maintenant Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Slap",
			fr: "Gifle",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
