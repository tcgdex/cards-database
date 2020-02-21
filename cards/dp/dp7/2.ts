import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-2",
	localId: 2,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Empoleon",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/2/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/2/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/2/high",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 560,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Emperor Aura",
			fr: "Aura empereur",
		},
		text: {
			en: "Once during your turn (before your attack), when you play Empoleon from your hand to evolve 1 of your Active Pokémon, you may use this power. Your opponent can't attach any Energy cards from his or her hand to his or her Pokémon during your opponent's next turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Pingoléon de votre main pour faire évoluer 1 de vos Pokémon Actifs, vous pouvez utiliser ce pouvoir. Votre adversaire ne peut pas attacher de cartes Énergie de sa main sur ses Pokémon lors de son prochain tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steel Wing",
			fr: "Aile d'acier",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Empoleon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Pingoléon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlpool",
			fr: "Siphon",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
