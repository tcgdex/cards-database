import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Sidney's Stadium",
		fr: "Stade de Damien",
		de: "Ulrichs Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player's Darkness Pokémon can't be Asleep, Confused, or Paralyzed.",
		fr: "Les Pokémon Obscurité de chaque joueur ne peuvent pas être Endormis, Confus ou Paralysés.",
		de: "Alle -Pokémon beider Spieler können nicht mehr schlafen, verwirrt oder gelähmt sein.",
	},

	thirdParty: {
		cardmarket: 277388,
		tcgplayer: 89203
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

