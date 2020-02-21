import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-31",
	localId: 31,

	// Card informations
	name: {
		en: "Vespiquen",
		fr: "Vespiquen",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 416,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/31/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/31/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/31/high",
		},
	},

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 909,
		type: AbilityType.POKEBODY,
		name: {
			en: "Green Dignity",
			fr: "Dignité verte",
		},
		text: {
			en: "As long as you have more Prize cards left than your opponent, Vespiquen's attacks do 10 more damage for each Grass Pokémon on your Bench to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Tant qu'il vous reste plus de cartes Récompense que votre adversaire, les attaques d'Apireine inflige 10 dégâts supplémentaires au Pokémon Actif pour chaque Pokémon Grass sur votre Banc (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bee Drain",
			fr: "Abeille épuisante",
		},
		text: {
			en: "After your attack, remove from Vespiquen the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Après votre attaque, retirez à Apireine autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bee Powder",
			fr: "Poudre-abeille",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is now Burned, Paralyzed, and Poisoned.",
			fr: "Lancez 2 pièces. Si ce sont deux faces, le Pokémon Défenseur est maintenant Brûlé, Paralysé et Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
