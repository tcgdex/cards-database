import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		de: "Owei",
		it: "Exeggcute",
		es: "Exeggcute",
		pt: "Exeggcute",
		'es-mx': "Exeggcute"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [102],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Jam-Packed",
			fr: "À Ras Bord",
			de: "Proppenvoll",
			it: "Pieno Zeppo",
			es: "Atiborrado",
			pt: "Abarrotado",
			'es-mx': "Huevo Relleno"
		},

		effect: {
			en: "Search your deck for a Basic {G} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {G} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{G}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {G} e assegnala a questo Pokémon. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia {G} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja tu mazo."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654343
	}
}

export default card