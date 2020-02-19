import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-75",
	localId: 75,

	// Card informations
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/75/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/75/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/75/high.png",
		},
	},

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacha",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Tentacle Strike",
			fr: "Coup de tentacule",
		},
		text: {
			en: "Search your opponent's discard pile for up to 2 Energy cards and attach them to any of your opponent's Pokémon in any way you like. For each Energy card attached in this way, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez dans la pile de défausse de votre adversaire jusqu'à 2 cartes Énergie et attachez-les à n'importe lequel des Pokémon de votre adversaire de la façon que vous voulez. Pour chaque carte Énergie attachée de cette façon, cette attaque inflige 20 dégâts au Pokémon correspondant. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Poison",
			fr: "Poison dangeureux",
		},
		text: {
			en: "If Tentacruel has less Energy attached to it than the Defending Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.",
			fr: "Si Tentacruel possède moins d'Énergie que le Pokémon Défenseur, celui-ci est maintenant Paralysé et Empoisonné.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

