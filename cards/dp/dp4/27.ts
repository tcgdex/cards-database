import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-27",
	localId: 27,

	// Card informations
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/27/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/27/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/27/high.png",
		},
	},

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 838,
		type: AbilityType.POKEBODY,
		name: {
			en: "Anger Point",
			fr: "Colérique",
		},
		text: {
			en: "If Primeape has any damage counters on it, Primeape's attacks do 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si Colossinge possède des marqueurs de dégât, ses attaques infligent 40 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whump",
			fr: "Boom",
		},
		text: {
			en: "Primeape is now Confused. Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Colosinge est maintenant Confus. Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

