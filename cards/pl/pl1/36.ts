import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-36",
	localId: 36,

	// Card informations
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/36/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/36/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/36/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		name: {
			en: "Flame Bash",
			fr: "Coup de flammes",
		},
		text: {
			en: "Flip a coin until you get tails. Search your deck for a number of Fire Energy cards up to the number of heads and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cherchez dans votre deck autant de cartes Énergie Fire que vous avez obtenu de faces et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Flames",
			fr: "Flammes mystérieuses",
		},
		text: {
			en: "If you have more Energy in play than your opponent, the Defending Pokémon is now Burned and Confused.",
			fr: "Si vous possédez plus d'Énergie en jeu que votre adversaire, le Pokémon Défenseur est maintenant Brûlé et Confus.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
