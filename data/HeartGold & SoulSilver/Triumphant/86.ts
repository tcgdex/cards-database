import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Indigo Plateau",
		fr: "Plateau Indigo",
		de: "Indigo Plateau"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l’utiliser.",
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can’t play this card.",
		de: "Jede Pokémon-LEGENDE im Spiel (deine und die deines Gegners) erhält +30 KP."
	},

	trainerType: "Stadium",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279616
	}
}

export default card
