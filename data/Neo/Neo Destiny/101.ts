import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Magnifier",
		fr: "Loupe",
		de: "Vergrößerungsglas"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Magnifier to 1 of your Pokémon. At the end of your turn, discard Magnifier. If the Pokémon Magnifier is attached to attacks, don't apply Resistance for that attack.",
		fr: "Attachez Loupe à un de vos Pokémon. A la fin de votre tour, défaussez-vous de Loupe. Si le Pokémon auquel Loupe est attachée attaque, n'appliquez pas la Résistance pour cette attaque.",
		de: "Lege Vergrößerungsglas an eines deiner Pokémon an. Lege am Ende deines Zuges auf deinen Ablagestapel. Wenn das Pokémon, an das das Vergrößerungsglas angelegt ist, angreift, wende Resistenz für diesen Angriff nicht an."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274753,
				tcgplayer: 87122
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274753,
				tcgplayer: 87122
			}
		}
	]
}

export default card
