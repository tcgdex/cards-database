import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "PlusPower",
		fr: "PlusPower",
		de: "PlusPower"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez PlusPower à votre Pokémon actif. À la fin de votre tour, défaussez PlusPower. Si l'attaque de ce Pokémon inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), l'attaque inflige 10 dégâts supplémentaires au Pokémon Défenseur.",
		de: "Lege PlusPower auf Deinem aktiven Pokémon ab, und entferne die Karte am Ende Deines Zugs wieder. Fügt deine Attacke dem verteidigenden Pokémon Schaden zu (nachdem Schwäche und Resistenz abgerechnet wurden), so erleidet das verteidigende Pokémon 10 weitere Schadenspunkte."
	},

	thirdParty: {
		cardmarket: 273779
	}
}

export default card
