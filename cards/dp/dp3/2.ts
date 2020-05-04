import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/2/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/2/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/2/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Daisuke Ito",

	abilities: [{
		id: 1057,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Waterlog",
			fr: "Imbibé d'O",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach as many basic Water Energy cards from your hand to any of your Pokémon in any way you like. If you do, your turn ends. This power can't be used if Blastoise is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher autant de cartes Énergie de base Water de votre main que vous voulez à vos Pokémon de la façon que vous voulez. Votre tour se termine. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "Does 50 damage plus 20 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
			fr: "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque Énergie Water attachée à Tortank mais qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
