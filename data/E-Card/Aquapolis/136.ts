import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Town Volunteers",
		fr: "Volontaires de la ville",
		de: "Stadt-Freiwillige"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nPrenez 5 cartes Bébé Pokémon, Pokémon de base, Évolution et/ou Énergie de base de votre pile de défausse et montrez-les à votre adversaire. Mélangez-les ensuite à votre deck.",
		de: "Nimm 5 Baby-Pokémon-,Basis-Pokémon-,Entwicklungs- und/oder Basis-Energiekarten aus deinem Ablagestapel und zeige sie deinem Gegner. Mische sie in dein Deck."
	},

	thirdParty: {
		cardmarket: 275212,
		tcgplayer: 90006
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
