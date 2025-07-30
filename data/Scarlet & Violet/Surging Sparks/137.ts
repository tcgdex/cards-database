import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		it: "Turtonator",
		pt: "Turtonator",
		de: "Tortunator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fully Singe",
			fr: "Complètement Roussi",
			es: "Quemadura Total",
			it: "Scottata Totale",
			pt: "Chamuscada Total",
			de: "Vollversengung"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon ex.",
			fr: "Défaussez une Énergie du Pokémon-ex Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon ex Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon-ex attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon ex Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon-ex deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Steaming Stomp",
			fr: "Piétinement Fumant",
			es: "Pisotón Humeante",
			it: "Pestata Incandescente",
			pt: "Pisoteada Fumegante",
			de: "Dampfstampfer"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Rianti Hidayat",

	thirdParty: {
		cardmarket: 794510
	}
}

export default card
