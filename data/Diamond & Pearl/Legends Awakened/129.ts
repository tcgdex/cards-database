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
		en: "Attach Bubble Coat to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as Bubble Coat is attached to a Pokémon, that Pokémon has no Weakness. If that Pokémon is damaged by an opponent's attack, discard this card at the end of the turn.",
		fr: "Attachez Manteau bulle à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.",
		de: "Solange Blubberschutz an ein Pokémon angelegt ist, hat dieses Pokémon keine Schwäche. Wenn dieses Pokémon durch einen gegnerischen Angriff Schaden erhält, lege Blubberschutz am Ende des Zuges auf deinen Ablagestapel."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278278,
		tcgplayer: 84008
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
