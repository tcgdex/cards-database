import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Revive",
		fr: "Réanimation"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez 1 carte Pokémon de base de votre pile de défausse sur votre Banc. Placez sur lui un nombre de marqueurs de dégâts égal à la moitié de ses PV (arrondis à la dizaine inférieure la plus proche). (Vous ne pouvez pas jouer Réanimation si votre Banc est plein.)"
	}
}

export default card
