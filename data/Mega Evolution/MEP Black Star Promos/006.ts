import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,
	cameoDexIds: [25],

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		de: "Drifzepeli",
		it: "Drifblim",
		pt: "Drifblim",
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		de: "Driftlon",
		it: "Drifloon",
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
			en: "Creepy Wind",
			fr: "Vent Perturbant",
			es: "Viento Escalofriante",
			de: "Schauriger Wind",
			it: "Ventolosco",
			pt: "Vento Amedrontador",
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Balloon Return",
			fr: "Retour Ballon",
			es: "Globo Retorno",
			de: "Ballonrückkehr",
			it: "Pallone di Ritorno",
			pt: "Retorno Balonista",
		},

		damage: 110,

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
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

