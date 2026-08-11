import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'de-de': "Zapplarang"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		'en-us': "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Upper Shock",
			'fr-fr': "Choc Supérieur",
			'de-de': "Entwicklungsschock",
			'es-es': "Sacudida Superior",
			'pt-br': "Choque Superior",
			'it-it': "Vantaggioshock"
		},

		damage: 40,

		effect: {
			'en-us': "If this Pokémon evolved from Eelektrik during this turn, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Si ce Pokémon a évolué de Lampéroie pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Zapplalek entwickelt hat, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Si este Pokémon ha evolucionado de Eelektrik durante este turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Se este Pokémon evoluiu de Eelektrik durante este turno, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Se questo Pokémon si è evoluto da Eelektrik durante questo turno, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Wild Charge",
			'fr-fr': "Éclair Fou",
			'de-de': "Stromstoß",
			'es-es': "Voltio Cruel",
			'pt-br': "Ataque Selvagem",
			'it-it': "Sprizzalampo"
		},

		damage: 160,

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582490,
				tcgplayer: 253253
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582490,
				tcgplayer: 253253
			}
		},
	],
}

export default card
