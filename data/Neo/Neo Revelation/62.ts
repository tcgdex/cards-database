import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Pokémon Breeder Fields",
		fr: "Champs d'élevage de Pokémon",
		de: "Pokémon-Aufzuchtsfelder"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin for 1 or 2 of your non-Baby Pokémon that can evolve. For each heads, search your deck for a later-Stage card that matches that Pokémon. Then put that card into your hand. Shuffle your deck afterward.",
		fr: "Lancez une pièce pour 1 ou 2 de vos Pokémon autres que Bébé Pokémon qui puisse évoluer. Pour chaque face, cherchez une carte de Niveau plus élevé de ce même Pokémon. Puis placez cette carte dans votre main. Mélangez ensuite votre deck.",
		de: "Wirf für 1 oder 2 deiner Nicht-Baby-Pokémon, die sich entwickeln können, eine Münze. Durchsuche jedesmal, wenn du „Kopf“ geworfen hast, dein Deck nach einer Karte einer späteren Entwicklungsstufe, die auf das Pokémon passt. Nimm dann diese Karte auf deine Hand. Mische danach dein Deck."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274648
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274648
			}
		}
	]
}

export default card

