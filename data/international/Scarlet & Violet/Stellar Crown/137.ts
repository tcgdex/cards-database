import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gravity Gemstone",
		'fr-fr': "Gemme Gravité",
		'es-es': "Gema Gravedad",
		'it-it': "Gemma Gravitazionale",
		'pt-br': "Gema da Gravidade",
		'de-de': "Erdanziehungsedelstein"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "As long as the Pokémon this card is attached to is in the Active Spot, the Retreat Cost of both Active Pokémon is {C} more.",
		'fr-fr': "Tant que le Pokémon auquel cette carte est attachée est sur le Poste Actif, le Coût de Retraite des deux Pokémon Actifs est augmenté de {C}.",
		'es-es': "Mientras el Pokémon al que esté unida esta carta esté en el Puesto Activo, el Coste de Retirada de ambos Pokémon Activos es de {C} más.",
		'it-it': "Fintanto che il Pokémon a cui è assegnata questa carta è in posizione attiva, il costo di ritirata di entrambi i Pokémon attivi aumenta di {C}.",
		'pt-br': "Enquanto o Pokémon ao qual esta carta está ligada estiver no Campo Ativo, o custo de Recuo de ambos os Pokémon Ativos será {C} a mais.",
		'de-de': "Solange das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist, erhöhen sich die Rückzugskosten beider Aktiven Pokémon um {C}."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785991,
				tcgplayer: 567400
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785991,
				tcgplayer: 567400
			}
		},
	],

	illustrator: "Toyste Beach",

}

export default card
