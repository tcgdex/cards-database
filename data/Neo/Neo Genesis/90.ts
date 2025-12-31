import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Time Capsule",
		fr: "Capsule temporelle",
		de: "Zeitmaschine"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire peut choisir 5 cartes Pokémon de base, Évolution et/ou Énergie de sa pile de défausse. (Si votre adversaire n'en a pas autant, il choisit toutes ou aucune.) Si votre adversaire choisit une ou plusieurs cartes, il les mélange dans son deck. Quelle que soit sa décision, vous pouvez faire de même, et vous ne pouvez plus jouer de carte Dresseur pendant ce tour.",
		de: "Your opponent may choose 5 Basic Pokémon, Evolution, and/or basic Energy cards in his or her discard pile. (If your opponent doesn't have that many, he or she chooses all or none of them.) If your opponent chooses any cards, he or she shuffles them into his or her deck. Either way, you may do the same, and you can't play any more Trainer cards this turn."
	},

	thirdParty: {
		cardmarket: 274490,
		tcgplayer: 89918
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
