import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'de-de': "Drifzepeli",
		'it-it': "Drifblim",
		'es-es': "Drifblim",
		'pt-br': "Drifblim"
	},

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'de-de': "Driftlon",
		'it-it': "Drifloon",
		'es-es': "Drifloon",
		'pt-br': "Drifloon",
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [426],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Disruptive Wind",
			'fr-fr': "Vent Perturbant",
			'de-de': "Störender Wind",
			'it-it': "Vento Disturbante",
			'es-es': "Viento Perturbador",
			'pt-br': "Vento Perturbador"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Balloon Return",
			'fr-fr': "Retour Ballon",
			'de-de': "Ballon-Rückkehr",
			'it-it': "Ritorno Palloncino",
			'es-es': "Regreso Globo",
			'pt-br': "Retorno de Balão"
		},

		damage: 110,

		effect: {
			'en-us': "Put this Pokémon and all attached cards into your hand.",
			'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			'it-it': "Prendi questo Pokémon e tutte le carte assegnate e aggiungili alla tua mano.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 851052,
				tcgplayer: 656256
			}
		},
	],
}

export default card

