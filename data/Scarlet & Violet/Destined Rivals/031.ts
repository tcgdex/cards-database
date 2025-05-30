import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano",
		it: "Growlithe",
		es: "Growlithe",
		pt: "Growlithe"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stoke",
			fr: "Attisement",
			de: "Anheizen",
			it: "Attizzatoio",
			es: "Atizador",
			pt: "Carregar"
		},

		effect: {
			en: "Search your deck for up to 2 Basic {R} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {R} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{R}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {R} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {R} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia {R} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			de: "Feuerkrallen",
			it: "Artigli Infuocati",
			es: "Garras de Fuego",
			pt: "Garras de Fogo"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card