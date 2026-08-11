import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Pokémon Fan Club",
		fr: "Fan Club Pokémon",
		de: "Pokémon Fan-Club"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 Baby Pokémon and/or Basic Pokémon cards and put them onto your bench. Shuffle your deck afterward.",
		fr: "Cherchez dans votre deck jusqu'à deux cartes Bébé Pokémon et/ou Pokémon de base et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach bis zu 2 Baby- und/oder Basis-Pokémonkarten und lege sie auf deine Bank. Mische dein Deck danach."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275206,
				tcgplayer: 88225
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275206,
				tcgplayer: 88225
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				tcgplayer: 477413
			}
		}
	]
}

export default card
