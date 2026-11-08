import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'fr-fr': "Ramoloss",
		'en-us': "Slowpoke",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Pêche à la Queue",
			'en-us': "Tail-Fishing",
			'es-es': "Cola Cebo",
			'it-it': "Codapesca",
			'pt-br': "Pesca de Cauda",
			'de-de': "Schweifangeln"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte et ajoutez-la à votre main. Mélangez ensuite votre deck. Si c'est pile, défaussez une carte de votre main.",
			'en-us': "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck. If tails, discard a card from your hand.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja. Si sale cruz, descarta 1 carta de tu mano.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Se esce croce, scarta una carta che hai in mano.",
			'pt-br': "Jogue uma moeda. Se sair cara, procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho. Se sair coroa, descarte uma carta da sua mão.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck. Lege bei Zahl 1 Karte aus deiner Hand auf deinen Ablagestapel."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'fr-fr': "Psykoud'Boul",
			'en-us': "Zen Headbutt",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715560,
				tcgplayer: 497499,
				cardtrader: 248712
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715560,
				tcgplayer: 497499,
				cardtrader: 248712
			}
		},
	],

	illustrator: "sowsow",

	description: {
		'en-us': "It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.",
	},
}

export default card
