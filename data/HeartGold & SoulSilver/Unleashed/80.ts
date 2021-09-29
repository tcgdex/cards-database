import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "PlusPower",
		fr: "PlusPower",
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez PlusPower à l’un de vos Pokémon. Une fois votre tour terminé, défaussez cette carte. Si la carte PlusPower est attachée à un Pokémon effectuant une attaque, cette dernière inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		en: "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn. \nIf the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance)."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
