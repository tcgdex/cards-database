import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Warp Point",
		fr: "Point de distorsion",
		de: "Verkrümmungspunkt"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any; then you switch your Active Pokémon with 1 of your Benched Pokémon, if any.",
		fr: "Votre adversaire échange le Pokémon Défenseur contre l'un des Pokémon de son Banc, s'il en possède. Vous échangez ensuite votre Pokémon Actif contre l'un des Pokémon de votre Banc, si vous en possédez.",
		de: "Dein Gegner tauscht das Verteidigende Pokémon mit 1 der Pokémon auf seiner Bank, falls er dort mindestens eins hat, und danach tauscht du dein Aktives Pokémon mit 1 der Pokémon auf deiner Bank, falls du dort mindestens eins hast."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90477,
				cardmarket: 275027
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90477,
				cardmarket: 275027
			},
		},
	],
}

export default card
