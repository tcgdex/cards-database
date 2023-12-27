import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Boltund VMAX",
		fr: "Fulgudog VMAX",
		es: "Boltund VMAX",
		it: "Boltund VMAX",
		pt: "Boltund VMAX",
		de: "Bellektro VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		en: "Boltund V",
		fr: "Fulgudog-V",
		es: "Boltund V",
		it: "Boltund-V",
		pt: "Boltund V",
		de: "Bellektro-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Tsuji",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Bolt Storm",
			fr: "Tempête Éclair",
			es: "Tormenta de Relámpagos",
			it: "Fulmintempesta",
			de: "Elektrosturm"
		},

		damage: "30+",

		effect: {
			en: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Lightning attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Lightning unida a todos tus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Lightning assegnata ai tuoi Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Lightning-Energie 30 Schadenspunkte mehr zu."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Max Bolt",
			fr: "Foudromax",
			es: "Maxirrelámpago",
			it: "Dynafulmine",
			de: "Dyna-Elektroblitz"
		},

		damage: 230,

		effect: {
			en: "During your next turn, this Pokémon can't use Max Bolt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Foudromax.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Maxirrelámpago.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Dynafulmine.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Dyna-Elektroblitz nicht einsetzen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
