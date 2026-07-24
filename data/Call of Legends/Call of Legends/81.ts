import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Lost World",
		fr: "Monde perdu",
		de: "Nirgendwo-Welt"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, if that player's opponent has 6 or more Pokémon in the Lost Zone, the player may choose to win the game.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l'utiliser.",
		de: "Einmal während seines Zuges darf sich jeder Spieler, wenn sich mindestens 6 Pokémon des Gegners im Nirgendwo befinden, dazu entscheiden, das Spiel zu gewinnen."
	},

	trainerType: "Stadium",

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86830,
				cardmarket: 279724
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86830,
				cardmarket: 279724
			},
		},
	],

}

export default card
