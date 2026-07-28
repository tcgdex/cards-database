import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Lucian's Assignment",
		fr: "La mission de Lucio",
		de: "Lucians Auftrag"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Move as many Energy cards attached to 1 of your Pokémon as you like to another of your Pokémon.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Entferne eine beliebige Anzahl Energiekarten von 1 deiner Pokémon und lege sie an 1 anderes deiner Pokémon an."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278666,
				tcgplayer: 86891
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278666,
				tcgplayer: 86891
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				cardmarket: 449863,
				tcgplayer: 123189
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				cardmarket: 868767,
				tcgplayer: 480073
			}
		}
	],

}

export default card
