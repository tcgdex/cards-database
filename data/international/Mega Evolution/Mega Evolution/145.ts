import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Houndstone",
		'fr-fr': "Tomberro",
		'de-de': "Friedwuff",
		'it-it': "Houndstone",
		'es-es': "Houndstone",
		'pt-br': "Houndstone",
		'es-mx': "Houndstone"
	},

	illustrator: "Arai Kiriko",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Greavard",
		'fr-fr': "Toutombe",
		'de-de': "Gruff",
		'it-it': "Greavard",
		'es-es': "Greavard",
		'pt-br': "Greavard",
		'es-mx': "Greavard"
	},
	stage: "Stage1",
	dexId: [972],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Horrifying Bite",
			'fr-fr': "Morsure Horrifiante",
			'de-de': "Grauenhafter Biss",
			'it-it': "Morso Orripilante",
			'es-es': "Mordisco Terrorífico",
			'pt-br': "Mordida Aterrorizante",
			'es-mx': "Mordida Terrorífica"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, choose a random card from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Wähle pro Kopf 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel proprio mazzo.",
			'es-es': "‌Lanza 1 moneda hasta que salga cruz. Por cada cara, elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
			'pt-br': "‌Jogue uma moeda até sair coroa. Para cada cara, escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no baralho dele.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Por cada cara, elige 1 carta aleatoria de la mano de tu rival. Tu rival muestra esas cartas y las baraja en su mazo."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'es-mx': "Martillar"
		},

		damage: 130
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
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851216,
				tcgplayer: 654484
			}
		},
	],
}

export default card
