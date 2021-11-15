import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Flute",
		fr: "Flûte Pokémon"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 carte Pokémon de base dans la pile de défausse de votre adversaire et placez-la sur son Banc. (Vous ne pouvez pas jouer Flûte Pokémon si le Banc de votre adversaire est plein)."
	}
}

export default card
