import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Moo-Moo Milk",
		fr: "Lait Meumeu",
		de: "Kuhmuh-Milch"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Pokémon. Flip 2 coins. Remove 2 damage counters times the number of heads from that Pokémon. If the Pokémon has fewer damage counters than that, remove all of them.",
		fr: "Choisissez 1 de vos Pokémon. Lancez 2 pièces. Retirez de ce Pokémon 2 marqueurs de dégâts multipliés par le nombre de faces. Si le Pokémon a moins de marqueurs de dégâts que cela, retirez-les tous.",
		de: "Wähle eines deiner Pokémon. Wirf zwei Münzen. Entferne zwei Schadensmarken mal der Anzahl 'Kopf' von diesem Pokémon. Falls das Pokémon weniger Schadensmarken hat, entferne alle."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274501,
				tcgplayer: 87574
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274501,
				tcgplayer: 87574
			}
		}
	]
}

export default card
