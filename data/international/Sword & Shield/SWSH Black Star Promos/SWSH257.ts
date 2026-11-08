import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'fr-fr': "Motisma V",
		'de-de': "Rotom V",
		'es-es': "Rotom V",
		'pt-br': "Rotom V",
		'it-it': "Rotom V",
		'en-us': "Rotom V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Piratage Perdu",
			'de-de': "Nirgendwo-Hack",
			'es-es': "Pirateo Perdido",
			'pt-br': "Hack Perdido",
			'it-it': "Taglio Perduto",
			'en-us': "Lost Hack"
		},

		effect: {
			'fr-fr': "Placez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire dans la Zone Perdue.",
			'de-de': "Lege 1 an ein Pokémon deines Gegners angelegte Spezial-Energie ins Nirgendwo.",
			'es-es': "Pon 1 Energía Especial unida a 1 de los Pokémon de tu rival en la Zona Perdida.",
			'pt-br': "Coloque 1 Energia Especial ligada a 1 dos Pokémon do seu oponente na Zona Perdida.",
			'it-it': "Prendi un'Energia speciale assegnata a uno dei Pokémon del tuo avversario e mettila nell'area perduta.",
			'en-us': "Put a Special Energy attached to 1 of your opponent's Pokémon in the Lost Zone."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Courant Extrême",
			'de-de': "Extreme Strömung",
			'es-es': "Corriente Extrema",
			'pt-br': "Corrente Extrema",
			'it-it': "Correntestrema",
			'en-us': "Extreme Current"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'en-us': "Discard an Energy from this Pokémon."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 674373
	}
}

export default card
