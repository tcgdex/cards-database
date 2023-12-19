import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "{{Infobox Faculté (JCC) | description=Retirez à 1 de vos Pokémon 2 marqueurs de dégât (ou un s'il n'y en a qu'un). }",
		de: "Entferne 2 Schadensmarken von 1 deiner Pokémon (1 falls dieses nur 1 hat)."
	}
}

export default card
