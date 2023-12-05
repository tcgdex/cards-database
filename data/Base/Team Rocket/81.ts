import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Full Heal Energy",
		fr: "Énergie guérisseuse",
		de: "Hyperheiler-Energie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "If you play this card from your hand, the Pokémon your attach it to is no longer Asleep, Confused, Paralyzed, or Poisoned. Full Heal Energy provide  energy. (Doesn't count as a basic Energy card.)"
	}
}

export default card
