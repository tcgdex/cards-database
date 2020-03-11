import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H9",
	localId: "H9",

	// Card informations
	name: {
		en: "Gengar",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,


	evolveFrom: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 1017,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Manipulate",
		},
		text: {
			en: "When you play Gengar from your hand to evolve your Active Pokémon, you may put a Basic Pokémon (excluding Baby Pokémon) from your discard pile onto your bench. Then flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydrokinesis",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned. If tails, the Defending Pokémon is now Confused.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
