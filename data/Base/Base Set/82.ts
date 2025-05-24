import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Full Heal",
		pt: "Cura Total",
		fr: "Guérison Totale",
		de: "Hyperheiler"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.",
		pt: "Seu Pokémon ativo não está mais Adormecido, Confuso, Paralisado ou Envenenado.",
		fr: "Votre Pokémon actif n'est plus Endormi, Confus, Paralysé ou Empoisonné.",
		de: "Dein aktives Pokémon ist nicht mehr schlafend, verwirrt, gelähmt oder vergiftet."
	}
}

export default card
