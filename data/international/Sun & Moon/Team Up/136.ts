import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Buff Padding",
		'fr-fr': "Protection Musclée",
		'es-es': "Protectores Acolchados",
		'it-it': "Imbottitura",
		'pt-br': "Acochoamento Poderoso",
		'de-de': "Dicke Polster"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée a un Coût de Retraite d’exactement 4, il reçoit +50 PV.",
		'en-us': "If the Pokémon this card is attached to has a Retreat Cost of exactly 4, it gets +50 HP.",
		'es-es': "Si el Pokémon al que está unida esta carta tiene un Coste de Retirada de exactamente 4, obtiene 50 PS más.",
		'it-it': "Se il costo di ritirata del Pokémon a cui è assegnata questa carta è esattamente pari a quattro, quel Pokémon ha 50 PS in più.",
		'pt-br': "Se o Pokémon ao qual esta carta está ligada tiver um custo de Recuo de exatamente 4, receberá 50 PS a mais.",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, Rückzugskosten von genau 4 hat, erhält es 50 KP mehr."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 369063,
		tcgplayer: 183926
	}
}

export default card
