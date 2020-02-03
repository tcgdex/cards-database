import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-26",
	localId: 26,

	// Card informations
	name: {
		en: "Skuntank",
		fr: "Skuntank",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 435,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/26/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/26/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/26/high.png",
		},
	},

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1105,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Gas",
			fr: "Gaz d'évolution",
		},
		text: {
			en: "Once during your turn (before your attack), when you play Skuntank from your hand to evolve 1 of your Active Pokémon, you may choose 1 of the Defending Pokémon. If that Pokémon tries to attack during your opponent's next turn, that attack does nothing.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Moufflair de votre main pour faire évoluer 1 de vos Pokémon Actifs, vous pouvez choisir 1 des Pokémon  Défenseurs. Si ce Pokémon essaye d'attaquer lors du prochain tour de votre adversaire, cette attaque est sans effet.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Claws",
			fr: "Griffes empoisonnées",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon  Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Plunder",
			fr: "Pillage",
		},
		text: {
			en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

