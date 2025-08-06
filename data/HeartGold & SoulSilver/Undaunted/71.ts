import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Burned Tower",
		fr: "Tour Cendrée",
		de: "Turmruine"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l’utiliser.",
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can’t play this card.",
		de: "Einmal während seines Zuges darf jeder Spieler eine Münze werfen. Bei \"Kopf\" durchsucht der Spieler seinen Ablagestapel nach 1 Basis-Energiekarte, zeigt sie seinem Gegner und nimmt sie auf die Hand."
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
		cardmarket: 279324,
		tcgplayer: 84058
	}
}

export default card
