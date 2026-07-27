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
		en: "Attach Expert Belt to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to gets +20 HP and that Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). When the Pokémon this card is attached to is Knocked Out, your opponent takes 1 more Prize card.",
		de: "Das Pokémon, an das diese Karte angelegt ist, erhält +20 KP und die Angriffe dieses Pokémon fügen den Aktiven Pokémon deines Gegners 20 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Wenn das Pokémon, an das diese Karte angelegt ist, kampfunfähig wird, nimmt dein Gegner 1 zusätzlichen Preis."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278959,
		tcgplayer: 85369
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85369
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85369
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				tcgplayer: 164160
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				tcgplayer: 480037
			}
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"],
			thirdParty: {
				tcgplayer: 480039
			}
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"],
			thirdParty: {
				tcgplayer: 480040
			}
		}
	],
	retreat: 0
}

export default card
