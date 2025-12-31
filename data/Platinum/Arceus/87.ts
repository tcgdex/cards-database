import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Expert Belt",
		de: "Expertengurt"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Expert Belt to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If\nthat Pokémon is Knocked Out, discard this card.",
		de: "Das Pokémon, an das diese Karte angelegt ist, erhält +20 KP und die Angriffe dieses Pokémon fügen den Aktiven Pokémon deines Gegners 20 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Wenn das Pokémon, an das diese Karte angelegt ist, kampfunfähig wird, nimmt dein Gegner 1 zusätzlichen Preis."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278959,
		tcgplayer: 85369
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card
