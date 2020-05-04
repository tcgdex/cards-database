import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-200",
	localId: 200,

	// Card informations
	name: {
		en: "Greninja & Zoroark-GX",
		fr: "Amphinobi et Zoroark-GX",
	},

	hp: 250,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/200/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/200/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/200/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/200/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Pulse",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Darkness Energy attached to all of your Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Union-GX",
			fr: "Vibrobscur",
		},
		text: {
			en: "Put 2 in any combination of Darkness Pokémon-GX and Darkness Pokémon-EX from your discard pile onto your Bench. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), attach 2 Energy cards from your discard pile to each Pokémon that you put onto your Bench in this way. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Darkness attachées à vos Pokémon.",
		},
		damage: "30+"
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			fr: "Union Ténébreuse-GX",
		},
		text: {
			fr: "Ajoutez de votre pile de défausse à votre Banc une combinaison de 2 cartes choisies parmi des Pokémon-GX Darkness et des Pokémon-EX Darkness. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), attachez 2 cartes Énergie de votre pile de défausse à chacun des Pokémon que vous avez placés sur votre Banc de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
