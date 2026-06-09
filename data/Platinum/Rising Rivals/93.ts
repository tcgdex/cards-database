import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Pokémon Contest Hall",
		fr: "La salle de concours Pokémon",
		de: "Pokémon-Wettbewerbshalle"
	},

	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, if that player's Bench isn't full, the player may flip a coin. If heads, that player searches his or her deck for a Basic Pokémon and puts it onto his or her Bench. If the player does, he or she may search his or her deck for a Pokémon Tool card and attach it to that Pokémon. If that player searched his or her deck, the player shuffles his or her deck afterward.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Einmal während seines Zuges kann jeder Spieler, wenn seine Bank nicht voll besetzt ist, 1 Münze werfen. Bei \"Kopf\" durchsucht dieser Spieler sein Deck nach 1 Basis-Pokémon-Karte und legt sie auf seine Bank. Wenn er das macht, kann er sein Deck nach einer Pokémon-Ausrüstungskarte durchsuchen und an dieses Pokémon anlegen. Falls ein Spieler sein Deck durchsucht hat, mischt er sein Deck danach."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278667
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
