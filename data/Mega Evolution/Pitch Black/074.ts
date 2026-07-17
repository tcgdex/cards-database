import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Backtrack Badge",
		fr: "Badge Rebelote",
		es: "Insignia Reintento",
		'es-mx': "Insignia Retroactiva",
		de: "Retourorden"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	regulationMark: "J",

	effect: {
		en: "Once during your turn, after you flip any coins for an attack of the Colorless Pokémon this card is attached to, you may ignore all results of those coin flips and begin flipping those coins again.",
		de: "Einmal während deines Zuges, nachdem du mindestens 1 Münze für eine Attacke des {C}-Pokémon, an das diese Karte angelegt ist, geworfen hast, kannst du alle Ergebnisse jener Münzwürfe ignorieren und jene Münzen erneut werfen.\n\nDu kannst während deines Zuges beliebig viele Pokémon-Ausrüstungen an deine Pokémon anlegen. Du kannst an jedes Pokémon nur 1 Pokémon-Ausrüstung anlegen, und sie bleibt angelegt."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895858,
				tcgplayer: 704831
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895858,
				tcgplayer: 704831
			}
		},
	],
}

export default card
