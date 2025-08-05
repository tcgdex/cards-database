import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Salamèche",
		de: "Glumanda",
		es: "Charmander",
		pt: "Charmander",
		it: "Charmander",
		en: "Charmander"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Queue en Feu",
			de: "Feuerspitze",
			es: "Cola en Llamas",
			pt: "Cauda em Chamas",
			it: "Coda in Fiamme",
			en: "Tail on Fire"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie {R}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía {R} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta de Energia {R} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo una carta Energia {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for a {R} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	thirdParty: {
		cardmarket: 547031
	}
}

export default card