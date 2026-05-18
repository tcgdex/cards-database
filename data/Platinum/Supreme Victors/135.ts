import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Champion's Room",
		fr: "Salle de Maître",
		de: "Kammer des Champs"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. The Retreat cost for each Pokémon SP (both yours and your opponent's) is Colorless less.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Die Rückzugskosten aller Pokémon SP (deiner und der deines Gegners) verringern sich um ."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278826
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
