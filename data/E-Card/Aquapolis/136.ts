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
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Take 5 Baby Pokémon, Basic Pokémon, Evolution, and/or basic Energy cards from your discard pile and then show them to your opponent. Shuffle them into your deck.",
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
