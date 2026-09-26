import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "The larger pair protects the little ones during battles. When facing strong opponents, the whole group will join the fight."
	},

	name: {
		en: "Maushold",
		fr: "Famignol",
		de: "Famieps",
		es: "Maushold",
		it: "Maushold",
		'es-mx': "Maushold",
		pt: "Maushold"
	},

	illustrator: "osare",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [925],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gnaw Together",
			fr: "Rongement de Groupe",
			de: "Gemeinsames Nagen",
			es: "Roer en Compañía",
			it: "Rosicchiamento Collettivo",
			'es-mx': "Mordisqueo en Compañía",
			pt: "Reunião de Roídas"
		},

		effect: {
			en: "Flip a coin for each Maushold you have in play. For each heads, discard the top 2 cards of your opponent's deck.",
			fr: "Lancez une pièce pour chaque Famignol que vous avez en jeu. Pour chaque côté face, défaussez les 2 cartes du dessus du deck de votre adversaire.",
			de: "Wirf 1 Münze für jedes Famieps, das du im Spiel hast. Lege pro Kopf die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			es: "Lanza 1 moneda por cada Maushold que tengas en juego. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Lancia una moneta per ogni Maushold che hai in gioco. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
			'es-mx': "Lanza 1 moneda por cada Maushold que tengas en juego. Por cada cara, descarta las primeras 2 cartas del mazo de tu rival.",
			pt: "Jogue uma moeda para cada Maushold que você tem em jogo. Para cada cara, descarte as 2 cartas de cima do baralho do seu oponente."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			es: "Destructor",
			it: "Botta",
			'es-mx': "Destructor",
			pt: "Pancada"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907753,
				tcgplayer: 716228
			}
		}
	],
}

export default card
