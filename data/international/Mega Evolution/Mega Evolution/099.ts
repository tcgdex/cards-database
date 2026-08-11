import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gholdengo",
		'fr-fr': "Gromago",
		'de-de': "Monetigo",
		'it-it': "Gholdengo",
		'es-es': "Gholdengo",
		'pt-br': "Gholdengo",
		'es-mx': "Gholdengo"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Gimmighoul",
		'fr-fr': "Mordudor",
		'de-de': "Gierspenst",
		'it-it': "Gimmighoul",
		'es-es': "Gimmighoul",
		'pt-br': "Gimmighoul",
		'es-mx': "Gimmighoul"
	},
	stage: "Stage1",
	dexId: [1000],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "All-You-Can-Grab",
			'fr-fr': "Libre-Service",
			'de-de': "Schnäppchenjagd",
			'it-it': "Arraffatutto",
			'es-es': "Agarre Libre",
			'pt-br': "Pegue à Vontade",
			'es-mx': "Búsqueda a Granel"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. Search your deck for a number of cards up to the number of heads and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cherchez dans votre deck un nombre de cartes inférieur ou égal au nombre de côtés face obtenus, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Durchsuche dein Deck nach bis zu so vielen Karten, wie du Kopf geworfen hast, und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Lancia una moneta finché non esce croce. Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Busca en tu baraja una cantidad de cartas igual o inferior al número de caras que hayan salido y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Jogue uma moeda até sair coroa. Procure por um número de cartas no seu baralho até o número de caras e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Busca en tu mazo una cantidad de cartas igual o inferior al número de caras que salieron y ponlas en tu mano. Después, baraja tu mazo."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Attack",
			'fr-fr': "Attaque Rapide",
			'de-de': "Tempoangriff",
			'it-it': "Attacco Veloce",
			'es-es': "Ataque Fugaz",
			'pt-br': "Ataque em Velocidade",
			'es-mx': "Ataque Veloz"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851170,
				tcgplayer: 654438
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851170,
				tcgplayer: 654438
			}
		},
	],
}

export default card
