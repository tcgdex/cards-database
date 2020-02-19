import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-42",
	localId: 42,

	// Card informations
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/42/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/42/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/42/high.png",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 647,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dig Down",
			fr: "Creuser vers le bas",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 5 cards of your deck. Choose as many Fighting Energy cards as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward. This power can't be used if Sandslash is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 5 cartes du dessus de votre deck. Choisissez autant de cartes Énergie Fighting que vous le voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au-dessus de votre deck, puis mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Sablaireau est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Needle",
			fr: "Aiguille",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

