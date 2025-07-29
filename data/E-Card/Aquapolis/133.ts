import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Seer",
		fr: "Superviseur",
		de: "Seher"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nRegardez les 6 cartes du dessus de votre deck. Prenez-y toutes les cartes Énergie de base que vous y trouvez, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		de: "Look at the top 6 cards of your deck. Take all basic Energy cards you find there, show them to your opponent, and then put them into your hand. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 275209
	}
}

export default card
