import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Snowpoint Temple",
		'fr-fr': "Temple Frimapic",
		'de-de': "Blizzach-Tempel"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Pokémon that isn't an Evolved Pokémon in play (both yours and your opponent's) gets +20 HP.",
		'fr-fr': "Chaque Pokémon en jeu qui n'est pas un Pokémon Évolué (parmi les vôtres et ceux de votre adversaire) obtient + 20 PV.",
		'de-de': "Jedes Pokémon im Spiel (deine und die deines Gegners), das kein entwickeltes Pokémon ist, erhält +20 KP.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278283,
		tcgplayer: 89410
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
