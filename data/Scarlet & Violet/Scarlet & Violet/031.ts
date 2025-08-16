import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

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
			es: "Atizador",
			it: "Attizzatoio",
			pt: "Carregar",
			de: "Anheizen"
		},

		effect: {
			en: "Search your deck for up to 2 Basic {R} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {R} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {R} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {R} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {R} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{R}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			es: "Garras de Fuego",
			it: "Artigli Infuocati",
			pt: "Garras de Fogo",
			de: "Feuerkrallen"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tika Matsuno",

	thirdParty: {
		cardmarket: 702326
	}
}

export default card