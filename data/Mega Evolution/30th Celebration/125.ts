import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Maushold",
		fr: "Famignol",
		de: "Famieps",
		es: "Maushold",
		it: "Maushold",
		'es-mx': "Maushold"
	},

	illustrator: "Kariya",
	rarity: "Common",
	category: "Pokemon",
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
			'es-mx': "Mordisqueo en Compañía"
		},

		effect: {
			en: "Flip a coin for each Maushold you have in play. For each heads, discard the top 2 cards of your opponent's deck.",
			fr: "Lancez une pièce pour chaque Famignol que vous avez en jeu. Pour chaque côté face, défaussez les 2 cartes du dessus du deck de votre adversaire.",
			de: "Wirf 1 Münze für jedes Famieps, das du im Spiel hast. Lege pro Kopf die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			es: "Lanza 1 moneda por cada Maushold que tengas en juego. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Lancia una moneta per ogni Maushold che hai in gioco. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
			'es-mx': "Lanza 1 moneda por cada Maushold que tengas en juego. Por cada cara, descarta las primeras 2 cartas del mazo de tu rival."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			es: "Destructor",
			it: "Botta",
			'es-mx': "Destructor"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card