import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		fr: "Motisma V",
		de: "Rotom V",
		es: "Rotom V",
		pt: "Rotom V",
		it: "Rotom V",
		en: "Rotom V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Piratage Perdu",
			de: "Nirgendwo-Hack",
			es: "Pirateo Perdido",
			pt: "Hack Perdido",
			it: "Taglio Perduto",
			en: "Lost Hack"
		},

		effect: {
			fr: "Placez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire dans la Zone Perdue.",
			de: "Lege 1 an ein Pokémon deines Gegners angelegte Spezial-Energie ins Nirgendwo.",
			es: "Pon 1 Energía Especial unida a 1 de los Pokémon de tu rival en la Zona Perdida.",
			pt: "Coloque 1 Energia Especial ligada a 1 dos Pokémon do seu oponente na Zona Perdida.",
			it: "Prendi un'Energia speciale assegnata a uno dei Pokémon del tuo avversario e mettila nell'area perduta.",
			en: "Put a Special Energy attached to 1 of your opponent's Pokémon in the Lost Zone."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Courant Extrême",
			de: "Extreme Strömung",
			es: "Corriente Extrema",
			pt: "Corrente Extrema",
			it: "Correntestrema",
			en: "Extreme Current"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			en: "Discard an Energy from this Pokémon."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 674373
	}
}

export default card