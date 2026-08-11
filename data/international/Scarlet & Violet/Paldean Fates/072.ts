import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		'en-us': "Oinkologne",
		'fr-fr': "Fragroin",
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
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Finest Selection",
			'fr-fr': "Premier Choix",
			'es-es': "Cuidada Selección",
			'it-it': "Assortimento Sopraffino",
			'pt-br': "Seleção Primorosa",
			'de-de': "Feinste Auslese"
		},

		effect: {
			'en-us': "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand.",
			'fr-fr': "Lancez 3 pièces. De votre pile de défausse, ajoutez à votre main un nombre de cartes inférieur ou égal au nombre de côtés face obtenus.",
			'es-es': "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de cartas igual o inferior al número de caras que te hayan salido y ponlas en tu mano.",
			'it-it': "Lancia tre volte una moneta. Prendi dalla tua pila degli scarti un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile a quelle che hai in mano.",
			'pt-br': "Jogue 3 moedas. Coloque um número de cartas da sua pilha de descarte na sua mão até o número de caras.",
			'de-de': "Wirf 3 Münzen. Nimm bis zu so viele Karten, wie du Kopf geworfen hast, aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Perfume Press",
			'fr-fr': "Pression Entêtante",
			'es-es': "Presión Perfume",
			'it-it': "Profumopressa",
			'pt-br': "Apertão Perfumado",
			'de-de': "Duftdruck"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
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

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751610,
				tcgplayer: 534434,
				cardtrader: 274256
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751610,
				tcgplayer: 534434,
				cardtrader: 274256
			}
		},
	],

	illustrator: "Akira Komayama",

	description: {
		'en-us': "This Pokémon sends a flowerlike scent wafting about. Well-developed muscles in its legs allow it to leap more than 16 feet with no trouble at all.",
	},

}

export default card
