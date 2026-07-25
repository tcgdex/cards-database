import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Bench Shield",
		de: "Bank-Schutzschild"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Bench Shield to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as the Pokémon this card is attached to is on your Bench, prevent all damage done to that Pokémon by attacks (both yours and your opponent's).",
		de: "Solange sich das Pokémon, an das diese Karte angelegt ist, auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Angriffe (deine und die deines Gegners) zugefügt würde."
	},

	trainerType: "Tool",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83811,
				cardmarket: 278955
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278955,
				tcgplayer: 83811
			}
		},
	],

	retreat: 0
}

export default card
