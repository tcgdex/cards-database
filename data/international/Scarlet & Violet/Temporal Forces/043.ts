import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [319],
	set: Set,

	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'es-es': "Sharpedo",
		'it-it': "Sharpedo",
		'pt-br': "Sharpedo",
		'de-de': "Tohaido"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Chew Off",
			'fr-fr': "Dévoré Retiré",
			'es-es': "Desmenuzar",
			'it-it': "Staccamorso",
			'pt-br': "Mastigar e Cuspir",
			'de-de': "Zerbeißen"
		},

		effect: {
			'en-us': "Flip 3 coins. For each heads, discard a random card from your opponent's hand.",
			'fr-fr': "Lancez 3 pièces. Pour chaque côté face, défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Lanza 3 monedas. Por cada cara, descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Jogue 3 moedas. Para cada cara, descarte uma carta aleatória da mão do seu oponente.",
			'de-de': "Wirf 3 Münzen. Lege pro Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "As soon as it catches the scent of prey, Sharpedo will jet seawater from its backside, hurtling toward the target to attack at 75 mph.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760673,
				tcgplayer: 542787
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760673,
				tcgplayer: 542787
			}
		},
	],

	illustrator: "Shinji Kanda",

}

export default card