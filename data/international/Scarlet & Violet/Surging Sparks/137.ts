import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [776],
	set: Set,

	name: {
		'en-us': "Turtonator",
		'fr-fr': "Boumata",
		'es-es': "Turtonator",
		'it-it': "Turtonator",
		'pt-br': "Turtonator",
		'de-de': "Tortunator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fully Singe",
			'fr-fr': "Complètement Roussi",
			'es-es': "Quemadura Total",
			'it-it': "Scottata Totale",
			'pt-br': "Chamuscada Total",
			'de-de': "Vollversengung"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon ex.",
			'fr-fr': "Défaussez une Énergie du Pokémon-ex Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon ex Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon-ex attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon ex Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon-ex deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Steaming Stomp",
			'fr-fr': "Piétinement Fumant",
			'es-es': "Pisotón Humeante",
			'it-it': "Pestata Incandescente",
			'pt-br': "Pisoteada Fumegante",
			'de-de': "Dampfstampfer"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794510,
				tcgplayer: 590082
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794510,
				tcgplayer: 590082
			}
		},
	],

	illustrator: "Rianti Hidayat",

}

export default card
