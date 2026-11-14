import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 918923,
				tcgplayer: 726550
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 918923,
				tcgplayer: 726550
			}
		}
	],
}

export default card