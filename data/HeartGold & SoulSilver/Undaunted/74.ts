import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Flower Shop Lady",
		fr: "Fleuriste",
		de: "Blumenfrau"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez 3 Pokémon et 3 cartes Énergie de base dans votre pile de défausse. Montrez-les à votre adversaire et mélangez-les avec votre deck.",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your discard pile for 3 Pokémon and 3 basic Energy cards. Show them to your opponent and shuffle them into your deck.",
		de: "Du kannst in jedem Zug nur eine Unterstützerkarte spielen. Wenn du diese Karte ausspielst, lege sie neben dein Aktives Pokémon. Lege diese Karte am Ende deines Zuges auf deinen Ablagestapel. Durchsuche deinen Ablagestapel nach 3 Pokémon- und 3 Basis-Energiekarten. Zeige sie deinem Gegner und mische sie in dein Deck."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279327,
				tcgplayer: 85519
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279327,
				tcgplayer: 85519
			}
		}
	],

	hp: 0,

	retreat: 0
}

export default card
