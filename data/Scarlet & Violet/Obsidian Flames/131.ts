import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Malosse",
		en: "Houndour",
		es: "Houndour",
		it: "Houndour",
		pt: "Houndour",
		de: "Hunduster"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Meute Coordonnée",
			en: "Coordinated Pack",
			es: "Manada Coordinada",
			it: "Branco Coordinato",
			pt: "Matilha Coordenada",
			de: "Koordiniertes Rudel"
		},

		effect: {
			fr: "Pour chacun de vos Malosse de Banc, cherchez dans votre deck une carte Énergie Darkness de base, puis attachez-la à ce Malosse-là. Mélangez ensuite votre deck.",
			en: "For each of your Benched Houndour, search your deck for a Basic Darkness Energy card and attach it to that Houndour. Then, shuffle your deck.",
			es: "Por cada uno de tus Houndour en Banca, busca en tu baraja 1 carta de Energía Darkness Básica y únela a ese Houndour. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base Darkness per ogni Houndour nella tua panchina e assegnala a quell'Houndour. Poi rimischia le carte del tuo mazzo.",
			pt: "Para cada um dos seus Houndour no Banco, procure por uma carta de Energia Darkness Básica no seu baralho e ligue-a àquele Houndour. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche für jedes Hunduster auf deiner Bank dein Deck nach 1 Basis-Darkness-Energiekarte und lege sie an jenes Hunduster an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Crocs Déterminés",
			en: "Focus Fangs",
			es: "Colmillos Certeros",
			it: "Focalzanne",
			pt: "Caninos Focalizados",
			de: "Fokusfänge"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card