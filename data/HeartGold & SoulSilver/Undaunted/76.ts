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
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can’t play this card.",
		de: "Alle im Spiel befindlichen Pokémon verfügen über keine Resistenz."
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["shuto-itagaki"]
		}
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279329
	}
}

export default card
