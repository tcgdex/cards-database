import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Ruins of Alph",
		fr: "Ruines d’Alph",
		de: "Alph-Ruinen"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l’utiliser.",
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Pokémon in play has no Resistance.",
		de: "Alle im Spiel befindlichen Pokémon verfügen über keine Resistenz."
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279329,
				tcgplayer: 88846
			}
		},
		{
			type: "normal",
			stamp: ["shuto-itagaki"],
			thirdParty: {
				cardmarket: 868065,
				tcgplayer: 480624
			}
		}
	],

	hp: 0,

	retreat: 0
}

export default card
