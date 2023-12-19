import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Sleep!",
		fr: "Bonne nuit, les petits !",
		de: "Schlaf!"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		de: "Wirf eine Münze. Bei 'Kopf' schläft das verteidigende Pokémon jetzt."
	}
}

export default card
