import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Low Pressure System",
		fr: "Système à basse pression"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Grass and Lightning Pokémon in play (both yours and your opponent's) gets +10 HP.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nChaque Pokémon  et  en jeu (les vôtres et ceux de votre adversaire) obtient 10 PV de plus."
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86847,
				cardmarket: 277459
			},
		},
	],

}

export default card
