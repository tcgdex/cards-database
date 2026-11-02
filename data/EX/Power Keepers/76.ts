import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Glacia's Stadium",
		fr: "Stade de Glacia",
		de: "Frosinas Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player's Water Pokémon (excluding Pokémon-ex) has no Weakness.",
		fr: "Les Pokémon Eau de chaque joueur (Pokémon-ex exclus) ne possèdent pas de Faiblesse.",
		de: "Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Wenn sich bereits eine Karte mit diesem Namen im Spiel befindet, kannst du diese Karte nicht spielen. Alle {W}-Pokémon beider Spieler (außer Pokémon-ex) haben keine Schwäche mehr.",
	},

	thirdParty: {
		cardmarket: 277382,
		tcgplayer: 85751
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

