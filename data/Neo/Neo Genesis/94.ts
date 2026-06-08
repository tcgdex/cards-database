import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Miracle Berry",
		fr: "Baie miracle",
		de: "Wunderbeere"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Miracle Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. At any time between turns, if the Pokémon Miracle Berry is attached to is Asleep, Confused, Paralyzed, or Poisoned, you may remove all those effects from that Pokémon and discard Miracle Berry. At the start of each turn, if the Pokémon Miracle Berry is attached to is Asleep, Confused, Paralyzed, or Poisoned, remove all of those effects from that Pokémon and discard Miracle Berry.",
		fr: "Attachez Baie miracle à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nN'importe quand entre deux tours, si le Pokémon auquel est attaché Baie miracle est Endormi, Confus, Paralysé ou Empoisonné, vous pouvez retirer tous ces effets de ce Pokémon et défausser Baie miracle. Au début de chaque tour, si le Pokémon auquel est attaché Baie miracle est Endormi, Confus, Paralysé ou Empoisonné, retirez tous ces effets de ce Pokémon et défaussez Baie miracle.",
		de: "Lege Wunderbeere an ein Pokémon an, das keine Pokémon-Ausrüstung hat. Wenn zu irgendeinem Zeitpunkt zwischen den Zügen das Pokémon, an das du Wunderbeere angelegt hast, schläft, verwirrt, gelähmt oder vergiftet ist, kannst du alle diese Effekte von diesem Pokémon entfernen. Lege dann Wunderbeere ab. Wenn zu Beginn eines Zugs das Pokémon, an das du Wunderbeere angelegt hast, schläft, verwirrt, gelähmt oder ver´giftet ist, entferne alle diese Auswirkungen von diesem Pokémon und lege Wunderbeere ab."
	},

	thirdParty: {
		cardmarket: 274494,
		tcgplayer: 87495
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
