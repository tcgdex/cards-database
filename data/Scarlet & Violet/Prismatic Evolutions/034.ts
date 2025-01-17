import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon ex",
		fr: "Mentali-ex",
		es: "Espeon ex",
		pt: "Espeon ex",
		it: "Espeon-ex",
		de: "Psiana-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psych Out",
			fr: "Déstabilisation",
			es: "Psicointimidación",
			pt: "Intimidar",
			it: "Intimidazione",
			de: "Nervös machen"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			pt: "Descarte uma carta aleatória da mão do seu oponente.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 160
	}, {
		cost: ["Grass", "Psychic", "Darkness"],

		name: {
			en: "Amazez",
			fr: "Améthyste Chevron",
			es: "Azeztulita",
			pt: "Cacoxenita",
			it: "Ametista Chevron",
			de: "Amazez"
		},

		effect: {
			en: "Devolve each of your opponent's evolved Pokémon by shuffling the highest Stage Evolution card on it into your opponent's deck.",
			fr: "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire en mélangeant avec le deck de votre adversaire la carte Évolution la plus élevée placée sur ceux-ci.",
			es: "Haz involucionar a cada uno de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de fase más alta que tengan sobre ellos en la baraja de tu rival, y barájalas todas.",
			pt: "Reverta a evolução de cada um dos Pokémon evoluídos do seu oponente embaralhando a carta de Evolução de Estágio mais alto sobre ele no baralho do seu oponente.",
			it: "Annulla l'evoluzione di ciascuno dei Pokémon evoluti del tuo avversario rimischiando la carta Evoluzione di fase più alta presente su di esso nel mazzo del tuo avversario.",
			de: "Rückentwickle jedes entwickelte Pokémon deines Gegners, indem du deinem Gegner die Karte mit der höchsten Entwicklungsphase in sein Deck mischst."
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card