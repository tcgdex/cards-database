import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua Conspirator",
		fr: "Conspirateur de Team Aqua",
		de: "Team Aqua Verschwörer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nCherchez dans votre deck une combinaison de 2 cartes faite de Pokémon de base dont le nom comporte Team Aqua et de cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Seach your deck for up to 2 in any combinaton of Basic Pokémon with Team Aqua in its name and basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 276054
	}
}

export default card
