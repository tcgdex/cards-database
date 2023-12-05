import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Defender",
		fr: "Defender",
		de: "Defender"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Defender à 1 de vos Pokémon. À la fin du prochain tour de votre adversaire, défaussez Defender. Les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		de: "Lege Defender auf einem Deiner Pokémon ab, und entferne die Karte nach dem nächsten gegenerischen Angriff wieder. Der Deinem Pokémon zugefühgte Schaden wird um 20 Schadenspunkte reduziert (nachdem Schäwche und Resistenz abgerechnet wurden)."
	}
}

export default card
