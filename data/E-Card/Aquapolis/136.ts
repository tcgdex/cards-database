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
		fr: "Prenez 5 cartes Bébé Pokémon, Pokémon de base, Évolution et/ou Énergie de base de votre pile de défausse et montrez-les à votre adversaire. Mélangez-les ensuite à votre deck.",
		de: "Nimm 5 Baby-Pokémon-,Basis-Pokémon-,Entwicklungs- und/oder Basis-Energiekarten aus deinem Ablagestapel und zeige sie deinem Gegner. Mische sie in dein Deck.",
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
