import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-58",
	localId: 58,

	// Card informations
	name: {
		en: "Octillery",
		fr: "Octillery",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/58/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/58/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/58/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
		fr: "Remoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		name: {
			en: "Water Vein",
			fr: "Filon d'eau",
		},
		text: {
			en: "Reveal the top 5 cards of your deck. Flip a coin for each Energy card you find there. This attack does 50 damage times the number of heads. Shuffle the revealed cards back into your deck.",
			fr: "Retournez les 5 cartes du dessus de votre deck. Lancez une pièce pour chaque carte Énergie que vous y trouvez. Cette attaque inflige 50 dégâts multipliés par le nombre de faces. Mélangez les cartes retournées à votre deck.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Octazooka",
			fr: "Octazooka",
		},
		text: {
			en: "Any time the Defending Pokémon tries to attack, your opponent flips a coin. If tails, the attack does nothing. (If the Defending Pokémon is no longer your opponent's Active Pokémon, this effect ends.)",
			fr: "Chaque fois que le Pokémon Défenseur essaye d'attaquer, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet. (Si le Pokémon Défenseur n'est plus le Pokémon Actif de votre adversaire, cet effet se termine.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
