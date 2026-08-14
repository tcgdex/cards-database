import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Low Pressure System",
		fr: "Système à basse pression",
		de: "Tiefdrucksystem"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Grass and Lightning Pokémon in play (both yours and your opponent's) gets +10 HP.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		de: "Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Alle {G} und {L} Pokémon im Spiel (deine und die deines Gegners) erhalten + 10 KP.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86846,
				cardmarket: 275963
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86846,
				cardmarket: 275963
			},
		},
	],

}

export default card
