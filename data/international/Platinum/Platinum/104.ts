import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Broken Time-Space",
		'fr-fr': "Espace-Temps brisé",
		'de-de': "Raum-Zeit-Anomalie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player may evolve a Pokémon that he or she just played or evolved during that turn.",
		'fr-fr': "Chaque joueur peut faire évoluer un Pokémon qu'il ou elle a joué ou fait évolué ce tour-ci.",
		'de-de': "Each player may evolve a Pokémon that he or she just played or evolved during that turn."
	},

	trainerType: "Stadium",

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83991,
				cardmarket: 278525
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278525,
				tcgplayer: 83991
			}
		},
		{
			type: "reverse",
			foil: "player-reward",
			thirdParty: {
				cardmarket: 278525,
				tcgplayer: 123188
			}
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"],
			thirdParty: {
				tcgplayer: 479865
			}
		},
		{
			type: "normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				tcgplayer: 479866
			}
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"],
			thirdParty: {
				tcgplayer: 480012
			}
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"],
			thirdParty: {
				tcgplayer: 480013
			}
		}
	],

	retreat: 0
}

export default card
