import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "PlusPower",
		fr: "PlusPower",
		de: "PlusPower"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez PlusPower à 1 de vos Pokémon. Défaussez cette carte à la fin de votre tour. Si le Pokémon auquel PlusPower est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		de: "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn.\n\nIf the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance)."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278533
	}
}

export default card
