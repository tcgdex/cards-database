import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Strength Charm",
		fr: "Fétiche de force"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Fétiche de force à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nÀ chaque fois qu'une attaque du Pokémon sur lequel est attachée Fétiche de force inflige des dégâts (après application de la Faiblesse et de la Résistance), cette attaque inflige 10 dégâts supplémentaires. À la fin de votre tour où cet effet a lieu, défaussez-vous de Fétiche de force."
	}
}

export default card
