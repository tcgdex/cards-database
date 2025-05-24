import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [98],
	set: Set,

	name: {
		fr: "Krabby",
		en: "Krabby",
		es: "Krabby",
		it: "Krabby",
		pt: "Krabby",
		de: "Krabby"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Eau Salée",
			en: "Salt Water",
			es: "Agua Salada",
			it: "Acqua Salata",
			pt: "Água Salgada",
			de: "Salzwasser"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 2 cartes Énergie {W} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Flip a coin. If heads, search your deck for up to 2 Basic {W} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 2 cartas de Energía {W} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a due carte Energia base {W} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Jogue uma moeda. Se sair cara, procure por até 2 cartas de Energia {W} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 2 Basis-{W}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			fr: "Pince-Masse",
			en: "Crabhammer",
			es: "Martillazo",
			it: "Martellata",
			pt: "Martelo Caranguejo",
			de: "Krabbhammer"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yukiko Baba"
}

export default card