import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lucky Egg",
		fr: "Œuf Chance",
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "If the Pokémon this card is attached to is Knocked Out by damage from an opponent’s attack, draw cards until you have 7 cards in your hand.",
		fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d’une attaque de l’adversaire, piochez des cartes jusqu’à en avoir 7 en main."
	},

	trainerType: "Tool",
	regulationMark: "D"
}

export default card
