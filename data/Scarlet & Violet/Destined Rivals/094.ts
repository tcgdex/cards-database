import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		en: "Team Rocket's Larvitar",
		fr: "Embrylex de la Team Rocket",
		de: "Team Rockets Larvitar",
		it: "Larvitar del Team Rocket",
		es: "Larvitar del Team Rocket",
		pt: "Larvitar da Equipe Rocket",
		'es-mx': "Larvitar del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mountain Munch",
			fr: "Dévore-Montagne",
			de: "Gipfelmampfer",
			it: "Sgranocchiacime",
			es: "Mascamontañas",
			pt: "Masca-montanhas",
			'es-mx': "Mascamontañas"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card