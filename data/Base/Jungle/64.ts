import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Balle",
		de: "Poké Ball"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, vous pouvez chercher n'importe quelle carte Pokémon de base ou Évolution dans votre deck. Montrez cette carte à votre adversaire, puis placez-la dans votre main. Mélangez ensuite votre deck.",
		de: "Wirf eine Münze. Bei 'Kopf' darfst du dein Deck nach einer beliebigen Basis-Pokémon- oder Evolutionskarte durchsuchen. Zeige diese karte deinem gegner und nimm sie auf deine Hand. Mische dein Deck dannach,"
	},

	thirdParty: {
		cardmarket: 273861
	}
}

export default card
