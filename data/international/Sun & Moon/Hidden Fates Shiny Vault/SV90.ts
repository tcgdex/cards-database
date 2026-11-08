import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Shrine of Punishment",
		'fr-fr': "Chapelle des Châtiments",
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'en-us': "Between turns, put 1 damage counter on each Pokémon-GX and Pokémon-EX (both yours and your opponent's). This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.",
		'fr-fr': "Entre chaque tour, placez un marqueur de dégâts sur chaque Pokémon-GX et Pokémon-EX (les vôtres et ceux de votre adversaire).",
	},
	trainerType: "Stadium",

}

export default card
