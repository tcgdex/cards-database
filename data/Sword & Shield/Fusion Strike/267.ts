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

	rarity: "Secret Rare",
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
			de: "Elektrosturm",
			es: "Tormenta de Relámpagos",
			pt: "Tempestade Relampejante",
			it: "Fulmintempesta"
		},

		damage: "30+",

		effect: {
			en: "This attack does 30 more damage for each {L} Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {L} attachée à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte {L}-Energie 30 Schadenspunkte mehr zu.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía {L} unida a todos tus Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia {L} ligada a todos os seus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia {L} assegnata ai tuoi Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Max Bolt",
			fr: "Foudromax",
			de: "Dyna-Elektroblitz",
			es: "Maxirrelámpago",
			pt: "Corisco Max",
			it: "Dynafulmine"
		},

		damage: 230,

		effect: {
			en: "During your next turn, this Pokémon can't use Max Bolt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Foudromax.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Dyna-Elektroblitz nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Maxirrelámpago.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Corisco Max.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Dynafulmine."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582497
	}
}

export default card