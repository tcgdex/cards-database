import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Imakuni?",
		fr: "Imakuni ?",
		de: "Imakuni?"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre Pokémon Actif est maintenant Confus.",
		en: "Your Active Pokémon is now Confused.",
		de: "Dein Aktives Pokémon ist jetzt verwirrt. Du kannst während deines Zuges (vor deinem Angriff) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288409,
		tcgplayer: 113721
	}
}

export default card
