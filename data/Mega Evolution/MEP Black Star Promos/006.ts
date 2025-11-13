import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		de: "Drifzepeli",
		it: "Drifblim",
		es: "Drifblim",
		pt: "Drifblim"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [426],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Disruptive Wind",
			fr: "Vent Perturbant",
			de: "Störender Wind",
			it: "Vento Disturbante",
			es: "Viento Perturbador",
			pt: "Vento Perturbador"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Balloon Return",
			fr: "Retour Ballon",
			de: "Ballon-Rückkehr",
			it: "Ritorno Palloncino",
			es: "Regreso Globo",
			pt: "Retorno de Balão"
		},

		damage: 110,

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			it: "Prendi questo Pokémon e tutte le carte assegnate e aggiungili alla tua mano.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 656256,
		cardmarket: 851052
	},
	variants: [
		{
			type: "holo"
		}
	]
}

export default card

