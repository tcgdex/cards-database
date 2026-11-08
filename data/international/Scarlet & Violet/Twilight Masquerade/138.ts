import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [424],
	set: Set,

	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'it-it': "Ambipom",
		'pt-br': "Ambipom",
		'de-de': "Ambidiffel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wicked Tail",
			'fr-fr': "Queue Malveillante",
			'es-es': "Cola Malvada",
			'it-it': "Coda Birbona",
			'pt-br': "Cauda Maligna",
			'de-de': "Fieser Schweif"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may flip 2 coins. For each heads, choose a random card from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez lancer 2 pièces. Pour chaque côté face, choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes lanzar 2 monedas. Por cada cara, elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lanciare due volte una moneta. Ogni volta che esce testa, scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá jogar 2 moedas. Para cada cara, escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no baralho dele.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Münzen werfen. Wähle pro Kopf 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Split into two, the tails are so adept at handling and doing things that Ambipom rarely uses its hands.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769312,
				tcgplayer: 550182
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769312,
				tcgplayer: 550182
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

}

export default card