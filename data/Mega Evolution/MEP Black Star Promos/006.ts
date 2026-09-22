import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,
	cameoDexIds: [25],

	name: {
		en: "Drifblim",
		de: "Drifzepeli",
		it: "Drifblim",
		es: "Drifblim",
		pt: "Drifblim"
	},

	evolveFrom: {
		en: "Drifloon",
		de: "Driftlon",
		it: "Drifloon",
		es: "Drifloon",
		pt: "Drifloon",
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
			en: "Disruptive Wind",
			de: "Störender Wind",
			it: "Vento Disturbante",
			es: "Viento Perturbador",
			pt: "Vento Perturbador"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Balloon Return",
			de: "Ballon-Rückkehr",
			it: "Ritorno Palloncino",
			es: "Regreso Globo",
			pt: "Retorno de Balão"
		},

		damage: 110,

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			it: "Prendi questo Pokémon e tutte le carte assegnate e aggiungili alla tua mano.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão."
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

