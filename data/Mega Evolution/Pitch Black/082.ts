import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Tremendous Bomb",
		fr: "Bombe Géniale",
		es: "Bomba Formidable",
		'es-mx': "Tremenda Bomba",
		de: "Ungeheure Bombe"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	regulationMark: "J",

	effect: {
		en: "If the Active Pokémon this card is attached to isn't a Mega Evolution Pokémon ex, is in the Active Spot, and takes 240 or more damage from your opponent's Mega Evolution Pokémon ex (even if this Pokémon is Knocked Out), place 12 damage counters on the Attacking Pokémon. If you placed any damage counters on in this way, discard this card",
		de: "Wenn das Pokémon, an das diese Karte angelegt istkein Mega-Entwicklungs-Pokémon-ex ist, in der Aktiven Position ist und durch eine Attacke von Mega-Entwicklungs-Pokémon-ex deines Gegners 240 Schadenspunkte oder mehr erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 12 Schadensmarken auf das Angreifende Pokémon. Wenn du auf diese Weise mindestens 1 Schadensmarke plaziert hast, lege diese Karte auf deinen Ablagestapel.\n\nDu kannst während deines Zuges beliebig viele Itemkarten spielen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895866,
				tcgplayer: 704839
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895866,
				tcgplayer: 704839
			}
		},
	],
}

export default card
