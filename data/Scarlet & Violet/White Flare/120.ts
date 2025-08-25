import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [528],
	set: Set,

	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		de: "Fletiamo",
		it: "Swoobat",
		pt: "Swoobat",
		es: "Swoobat",
		'es-mx': "Swoobat"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Happy Return",
			fr: "Retour Heureux",
			de: "Freudige Rückkehr",
			it: "Felice Ritorno",
			pt: "Retorno Auspicioso",
			es: "Feliz Retorno",
			'es-mx': "Retorno Feliz"
		},

		effect: {
			en: "Put 1 of your Benched Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main l'un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées.",
			de: "Nimm 1 Pokémon von deiner Bank und alle angelegten Karten auf deine Hand.",
			it: "Riprendi in mano uno dei tuoi Pokémon in panchina e tutte le carte a esso assegnate.",
			pt: "Coloque 1 dos seus Pokémon no Banco e todas as cartas ligadas a ele na sua mão.",
			es: "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu mano.",
			'es-mx': "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu mano."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			de: "Windstoß",
			it: "Raffica",
			pt: "Lufada de Vento",
			es: "Tornado",
			'es-mx': "Ráfaga de Aire"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835972
	}
}

export default card