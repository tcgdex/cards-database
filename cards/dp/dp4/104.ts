import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-104",
	localId: 104,

	// Card informations
	name: {
		en: "Darkrai",
		fr: "Darkrai",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/104/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/104/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/104/high",
		},
	},

	evolveFrom: {
		fr: "Niveau Sup",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 543,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Shadow",
			fr: "Ombre obscure",
		},
		text: {
			en: "Each basic Darkness Energy card attached to your Darkness Pokémon now has the effect \"If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance).\" You can't use more than 1 Dark Shadow Poké-Body each turn.",
			fr: "Chaque carte Énergie Darkness attachée à vos Pokémon Darkness possède maintenant l'effet 'si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).' Vous ne pouvez pas utiliser plus d'1 Poké-Body Ombre obscure par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Endless Darkness",
			fr: "Obscurité infinie",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep. If both of them are tails, the Defending Pokémon is Knocked Out.",
			fr: "Le Pokémon Défenseur est maintenant Endormi. Lancez 2 pièces au lieu d'1 entre deux tours. Si l'une d'elles est pile, le Pokémon Défenseur reste Endormi. Si ce sont deux piles, le Pokémon Défenseur est mis K.O.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
