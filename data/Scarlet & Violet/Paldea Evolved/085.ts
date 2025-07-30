import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		fr: "Ramoloss",
		en: "Slowpoke",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Pêche à la Queue",
			en: "Tail-Fishing",
			es: "Cola Cebo",
			it: "Codapesca",
			pt: "Pesca de Cauda",
			de: "Schweifangeln"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte et ajoutez-la à votre main. Mélangez ensuite votre deck. Si c'est pile, défaussez une carte de votre main.",
			en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck. If tails, discard a card from your hand.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja. Si sale cruz, descarta 1 carta de tu mano.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Se esce croce, scarta una carta che hai in mano.",
			pt: "Jogue uma moeda. Se sair cara, procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho. Se sair coroa, descarte uma carta da sua mão.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck. Lege bei Zahl 1 Karte aus deiner Hand auf deinen Ablagestapel."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			fr: "Psykoud'Boul",
			en: "Zen Headbutt",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			de: "Zen-Kopfstoß"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "sowsow",

	thirdParty: {
		cardmarket: 715560
	}
}

export default card