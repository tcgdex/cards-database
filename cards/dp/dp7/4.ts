import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-4",
	localId: 4,

	// Card informations
	name: {
		en: "Lumineon",
		fr: "Lumineon",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 457,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/4/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/4/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/4/high",
		},
	},

	evolveFrom: {
		en: "Finneon",
		fr: "Ecayon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 1065,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fin Luster",
			fr: "Lustre-aileron",
		},
		text: {
			en: "Once during your turn (before your attack), if Lumineon is your Active Pokémon, you may look at your opponent's hand. If your opponent's Bench isn't full, choose 1 Basic Pokémon from your opponent's hand, and put it onto his or her Bench. Then, switch it with the Defending Pokémon. This power can't be used if Lumineon is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Luminéon est votre Pokémon Actif, vous pouvez regarder la main de votre adversaire. Si le Banc de votre adversaire n'est pas plein, choisissez 1 Pokémon de base dans la main de votre adversaire et placez-le sur son Banc. Ensuite, échangez-le avec le Pokémon  Défenseur. Ce pouvoir ne peut pas être utilisé si Luminéon est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		name: {
			en: "Quick Swim",
			fr: "Nage rapide",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Elegant Swim",
			fr: "Nage élégante",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Lumineon during your opponent's next turn.",
			fr: "Lancez  une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Luminéon lors du prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
