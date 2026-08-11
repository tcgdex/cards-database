import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Battle Frontier",
		fr: "Zone de combat",
		de: "Kampfzone"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player's Colorless Evolved Pokémon, Darkness Evolved Pokémon, and Metal Evolved Pokémon can't use any Poké-Powers or Poké-Bodies.",
		fr: "Les Pokémon Évolués Incolore, Obscurité et Métal de chaque joueur ne peuvent pas utiliser de Poké-Powers ou de Poké-Bodies.",
		de: "Entwickelte -Pokémon, entwickelte -Pokémon und entwickelte -Pokémon beider Spieler können keine Poké-Power oder Poké-Body anwenden.",
	},

	thirdParty: {
		cardmarket: 277377,
		tcgplayer: 83741
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

