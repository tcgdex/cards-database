import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Bertha's Warmth",
		fr: "La chaleur de Terry",
		de: "Teresas Herzlichkeit"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Remove 5 damage counters from 1 of your Pokémon SP.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Entferne 5 Schadensmarken von 1 deiner Pokémon SP."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278664,
		tcgplayer: 83813
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
