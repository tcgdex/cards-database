import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Moonlight Stadium",
		'fr-fr': "Stade clair de lune",
		'de-de': "Mondscheinstadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. The Retreat Cost for each Psychic and Darkness Pokémon (both yours and your opponent's) is 0.",
		'fr-fr': "Le Coût de retraite de chaque Pokémon Psy et Obscurité (les vôtres et ceux de votre adversaire) est de 0.",
		'de-de': "Jedes - und jedes -Pokémon im Spiel (deine und die deines Gegners) hat Rückzugskosten 0.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278002,
		tcgplayer: 87579
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		}
	]
}

export default card
