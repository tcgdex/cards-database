import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Ponyta",
		fr: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		pt: "Ponyta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Charge Energy",
			fr: "Recharge Énergétique",
			es: "Cargar Energía",
			it: "Caricaenergia",
			pt: "Carga de Energia"
		},

		effect: {
			en: "Search your deck for a Basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia Básica no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flame Tail",
			fr: "Queue de Flammes",
			es: "Cola de Fuego",
			it: "Codafiamma",
			pt: "Cauda de Chamas"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card