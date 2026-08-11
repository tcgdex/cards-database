import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		'fr-fr': "Fragroin",
		'en-us': "Oinkologne",
		'es-es': "Oinkologne",
		'it-it': "Oinkologne",
		'pt-br': "Oinkologne",
		'de-de': "Fragrunz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Gourmelet",
		'en-us': "Lechonk",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Premier Choix",
			'en-us': "Finest Selection",
			'es-es': "Cuidada Selección",
			'it-it': "Assortimento Sopraffino",
			'pt-br': "Seleção Primorosa",
			'de-de': "Feinste Auslese"
		},

		effect: {
			'fr-fr': "Lancez 3 pièces. De votre pile de défausse, ajoutez à votre main un nombre de cartes inférieur ou égal au nombre de côtés face obtenus.",
			'en-us': "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand.",
			'es-es': "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de cartas igual o inferior al número de caras que te hayan salido y ponlas en tu mano.",
			'it-it': "Lancia tre volte una moneta. Prendi dalla tua pila degli scarti un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile a quelle che hai in mano.",
			'pt-br': "Jogue 3 moedas. Coloque um número de cartas da sua pilha de descarte na sua mão até o número de caras.",
			'de-de': "Wirf 3 Münzen. Nimm bis zu so viele Karten, wie du Kopf geworfen hast, aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Pression Entêtante",
			'en-us': "Perfume Press",
			'es-es': "Presión Perfume",
			'it-it': "Profumopressa",
			'pt-br': "Apertão Perfumado",
			'de-de': "Duftdruck"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon sends a flowerlike scent wafting about. Well-developed muscles in its legs allow it to leap more than 16 feet with no trouble at all.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725264,
				tcgplayer: 509773,
				cardtrader: 256080
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725264,
				tcgplayer: 509773,
				cardtrader: 256080
			}
		},
	],

	illustrator: "Akira Komayama",

	
}

export default card
