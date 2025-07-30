import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Holon Mentor",
		fr: "Mentor Holon",
		de: "Holon Lehrer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nDéfaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, vous ne pouvez pas jouer cette carte.\n\nChoisissez dans votre deck jusqu'à 3 cartes Pokémon de base possédant chacun un maximum de 100 PV, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Lege 1 Karte von deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, kannst du diese Karte nicht spielen.\n\nDurchsuche dein Deck nach bis zu 3 Basis-Pokémon, die jeweils 100 KP oder weniger haben, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277280
	}
}

export default card
