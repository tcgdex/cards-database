import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Pokémon Personality Test",
		fr: "Test de personnalité des Pokémon",
		de: "Pokémon-Persönlichkeitstest"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez une carte Évolution de votre main devant vous, face cachée. Votre adversaire doit deviner s'il s'agit d'une carte Pokémon lumineux, Pokémon obscur ou ni l'une ni l'autre. Retournez la carte. Si votre adversaire a vu juste, il pioche 3 cartes. S'il s'est trompé, vous piochez 3 cartes. Dans tous les cas, replacez la carte dans votre main.",
		de: "Put an Evoloution card from your hand face down in front of you. Your opponent guesses whether it is a Pokémon card with Light in its name, a Pokémon card with Dark in its name, or neither one. Flip the card over. If your opponent guessed right, he or she draw 3 cards. If your oppnent guessed wrong, you draw 3 cards. Either way, return the card to your hand."
	},

	thirdParty: {
		cardmarket: 274754
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
