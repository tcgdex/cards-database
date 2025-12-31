import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Houndstone",
		fr: "Tomberro",
		de: "Friedwuff",
		it: "Houndstone",
		es: "Houndstone",
		pt: "Houndstone",
		'es-mx': "Houndstone"
	},

	illustrator: "Arai Kiriko",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		en: "Greavard",
		fr: "Toutombe",
		de: "Gruff",
		it: "Greavard",
		es: "Greavard",
		pt: "Greavard",
		'es-mx': "Greavard"
	},
	stage: "Stage1",
	dexId: [972],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Horrifying Bite",
			fr: "Morsure Horrifiante",
			de: "Grauenhafter Biss",
			it: "Morso Orripilante",
			es: "Mordisco Terrorífico",
			pt: "Mordida Aterrorizante",
			'es-mx': "Mordida Terrorífica"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, choose a random card from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Wähle pro Kopf 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel proprio mazzo.",
			es: "‌Lanza 1 moneda hasta que salga cruz. Por cada cara, elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
			pt: "‌Jogue uma moeda até sair coroa. Para cada cara, escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no baralho dele.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Por cada cara, elige 1 carta aleatoria de la mano de tu rival. Tu rival muestra esas cartas y las baraja en su mazo."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			it: "Martello",
			es: "Martillear",
			pt: "Martelada",
			'es-mx': "Martillar"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654484,
		cardmarket: 851216
	}
}

export default card