import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Sunyshore City Gym",
		fr: "Le gymnase de Rivamar City",
		de: "Sonnewik-Arena"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Any damage done by attacks from Lightning Pokémon (both yours and your opponent's) to the Defending Pokémon isn't affected by Resistance. Each Lightning Pokémon in play (both yours and your opponent's) has no Weakness.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Wenn eine andere Karte mit dem gleichen Namen im Spiel ist, kannst du diese Karte nicht spielen. Schaden, der den Verteidigenden Pokémon durch {L}-Pokémon (deinen und denen deines Gegners) zugefügt wird, wird durch Resistenz nicht verändert. Alle {L}-Pokémon im Spiel (deine und die deines Gegners) haben keine Schwäche."
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278668,
				tcgplayer: 89625
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278668,
				tcgplayer: 89625
			}
		},
	],

}

export default card
