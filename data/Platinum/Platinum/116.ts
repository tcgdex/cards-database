import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Team Galactic's Invention G-101 Energy Gain",
		fr: "Gain d'Énergie Invention G-101 de Team Galaxie",
		de: "Team Galaktiks Erfindung G-101 Energiegewinn"
	},

	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Invention G-101 Gain d'Énergie de Team Galaxie à 1 de vos Pokémon SP qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la. Lorsque le Pokémon auquel cette carte est attachée n'est plus un Pokémon SP, défaussez-la.",
		de: "Attach Team Galactic's Invention G-101 Energy Gain to 1 of your Pokémon SP that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. When the Pokémon this card is attached to is no longer a Pokémon SP, discard this card.\n\nAs long as Team Galactic's Invention G-101 Energy Gain is attached to a Pokémon, the attack cost of that Pokémon's attacks is  less."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278537
	}
}

export default card
