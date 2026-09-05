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
		en: "Put an Evolution card from your hand face down in front of you. Your opponent guesses whether it is a Pokémon card with Light in its name, a Pokémon card with Dark in its name, or neither one. Flip the card over. If your opponent guessed right, he or she draws 3 cards. If your opponent guessed wrong, you draw 3 cards. Either way, return the card to your hand.",
		fr: "Placez une carte Évolution de votre main devant vous, face cachée. Votre adversaire doit deviner s'il s'agit d'une carte Pokémon lumineux, Pokémon obscur ou ni l'une ni l'autre. Retournez la carte. Si votre adversaire a vu juste, il pioche 3 cartes. S'il s'est trompé, vous piochez 3 cartes. Dans tous les cas, replacez la carte dans votre main.",
		de: "Lege eine Entwicklungskarte aus deiner Hand verdeckt vor dich hin. Dein Gegner muss raten, ob es eine Pokémonkarte mit „Helles“ im Namen, eine Pokémonkarte mit „Dunkles“ im Namen oder weder noch ist. Deck die Karte dann auf. Wenn dein Gegner richtig geraten hat, zieht er drei Karten. Wenn dein Gegner falsch geraten hat, ziehst du drei Karten. Nimm auf jeden Fall die Karte zurück auf deine Hand."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274754
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274754
			}
		}
	]
}

export default card
