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
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Tool",
	regulationMark: "J",

	effect: {
		en: "If the Active Pokémon this card is attached to is not a Mega Pokémon ex and takes 240 damage or more from an attack from your opponent's Mega Pokémon ex, put 12 damage counters on the attacking Pokémon and discard this card.",
		de: "Wenn das Pokémon, an das diese Karte angelegt istkein Mega-Entwicklungs-Pokémon-ex ist, in der Aktiven Position ist und durch eine Attacke von Mega-Entwicklungs-Pokémon-ex deines Gegners 240 Schadenspunkte oder mehr erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 12 Schadensmarken auf das Angreifende Pokémon. Wenn du auf diese Weise mindestens 1 Schadensmarke plaziert hast, lege diese Karte auf deinen Ablagestapel.\n\nDu kannst während deines Zuges beliebig viele Itemkarten spielen."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895898,
				tcgplayer: 704870
			}
		},
	],
}

export default card
