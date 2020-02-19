import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Dustox",
		fr: "Papinox",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 269,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/25/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/25/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/25/high.png",
		},
	},

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 251,
		type: AbilityType.POKEBODY,
		name: {
			en: "Camouflage Pattern",
			fr: "Motif camouflage",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Dustox by your opponent's Pokémon that is affected by 2 or more Special Conditions.",
			fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Papinox par des Pokémon de votre adversaire étant affectés par au moins 2 États Spéciaux.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Smogscreen",
			fr: "Para-brouillard",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chemical Scale",
			fr: "Écaille chimique",
		},
		text: {
			en: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, the Defending Pokémon is now Burned and Confused.",
			fr: "Si le Pokémon Défenseur possède des Poké-Powers ou des Poké-Bodies, il est maintenant Brûlé et Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

