import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Bubble Coat",
		fr: "Manteau bulle",
		de: "Blubberschutz"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Manteau bulle à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.",
		de: "Solange Blubberschutz an ein Pokémon angelegt ist, hat dieses Pokémon keine Schwäche. Wenn dieses Pokémon durch einen gegnerischen Angriff Schaden erhält, lege Blubberschutz am Ende des Zuges auf deinen Ablagestapel."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278278
	}
}

export default card
