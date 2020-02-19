import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-15",
	localId: 15,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan Niv. 47",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/15/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/15/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/15/high.png",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 360,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flutter Wings",
			fr: "Battement d'ailes",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Beedrill is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon Grass. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Dardargnan est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Needle Shock",
			fr: "Choc aiguille",
		},
		text: {
			en: "The Defending Pokémon is now Paralyzed and Poisoned. Ignore this effect if any of your Pokémon used Needle Shock during your last turn.",
			fr: "Le Pokémon Défenseur est maintenant Paralysé et Empoisonné. Ignorez cet effet si un de vos Pokémon a utilisé Choc aiguille lors de votre dernier tour.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

