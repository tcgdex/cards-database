import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		en: "Yamask",
		fr: "Tutafeh",
		es: "Yamask",
		it: "Yamask",
		pt: "Yamask",
		de: "Makabaja"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Ominous Eyes",
			fr: "Regard Menaçant",
			es: "Ojos Aciagos",
			it: "Sguardo Malevolo",
			pt: "Olhos Tenebrosos",
			de: "Unheilvolle Augen"
		},

		effect: {
			en: "Put 3 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			es: "Pon 3 contadores de daño en uno de los Pokémon de tu rival.",
			it: "Metti tre segnalini danno su uno dei Pokémon del tuo avversario.",
			pt: "Coloque 3 contadores de dano em 1 dos Pokémon do seu oponente.",
			de: "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners."
		}
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "aoki",

	thirdParty: {
		cardmarket: 785916
	}
}

export default card
