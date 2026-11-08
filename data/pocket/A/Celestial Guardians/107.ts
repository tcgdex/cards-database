import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Raticate",
		'fr-fr': "Rattatacd'Alola",
		'es-es': "Raticatede Alola",
		'it-it': "Raticatedi Alola",
		'de-de': "Alola-Rattikarl",
		'pt-br': "Raticatede Alola",
		'ko-kr': "알로라레트라"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [20],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Alolan Rattata"
	},

	description: {
		'en-us': "It has an incredibly greedy personality. Its nest is filled with so much food gathered by Rattata at its direction, it can't possibly eat it all.",
		'fr-fr': "Pokémon très avide, il est souvent incapable\nde manger toute la nourriture accumulée\ndans son nid par ses Rattata subordonnés.",
		'es-es': "Es de naturaleza avariciosa. Obliga a los Rattata a acumular tanta\ncomida en su madriguera que a menudo no puede comérsela toda.",
		'it-it': "Molto ingordo di natura, si fa portare il cibo dai Rattata,\naccumulandone nella tana più di quanto riesca a mangiarne.",
		'de-de': "Es ist unglaublich gierig. Oftmals kann es gar nicht\nalles fressen, was es die Rattfratz in sein Nest\nzusammentragen lässt.",
		'pt-br': "É um Pokémon extremamente ganancioso. Seu ninho\nfica tão repleto de comida coletada por Rattata,\nque não dá conta de comer tudo.",
		'ko-kr': "매우 욕심이 많다. 둥지에는\n꼬렛들이 모은 먹이가\n다 먹지 못할 만큼 쌓여 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Scrounge-and-Scarf",
			'fr-fr': "Farfouronge",
			'es-es': "Ladrón Tragón",
			'it-it': "Mangiacarte a Tradimento",
			'de-de': "Wühlfresser",
			'pt-br': "Investigar e Ingerir",
			'ko-kr': "뒤져서먹기"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "Discard a random Item card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte Objet de la main de votre adversaire.",
			'es-es': "Descarta 1 carta de Objeto aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta Strumento a caso dalla mano del tuo avversario.",
			'de-de': "Lege 1 zufällige Itemkarte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'pt-br': "Descarte carta de Item aleatória da mão do seu oponente.",
			'ko-kr': "상대의 패에서 아이템을 랜덤으로 1장 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lunala"]
}

export default card