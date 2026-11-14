import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	cameoDexIds: [58, 208],

	name: {
		en: "Legendary Pyroduct",
		fr: "Pyroconduit Légendaire",
		de: "Legendäre Lavaröhre",
		es: "Piroducto Legendario",
		it: "Tunnel Lavico Leggendario",
		pt: "Tubo de Lava Lendário",
		'es-mx': "Piroducto Legendario"
	},

	illustrator: "akagi",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 918924,
				tcgplayer: 726722
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 918924,
				tcgplayer: 726722
			}
		}
	],
}

export default card