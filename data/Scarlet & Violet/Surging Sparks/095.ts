import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Espathra",
		fr: "Cléopsytra",
		es: "Espathra",
		it: "Espathra",
		pt: "Espathra",
		de: "Psiopatra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mystical Eyes",
			fr: "Yeux Mystiques",
			es: "Ojos Místicos",
			it: "Occhi Mistici",
			pt: "Olhos Místicos",
			de: "Mystische Augen"
		},

		effect: {
			en: "Devolve 1 of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Faites dés-évoluer l'un des Pokémon évolués de votre adversaire en plaçant dans la main de votre adversaire la carte Évolution la plus élevée placée sur celui-ci.",
			es: "Haz involucionar a 1 de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
			it: "Annulla l'evoluzione di uno dei Pokémon evoluti del tuo avversario prendendo la carta Evoluzione di fase più alta presente su di esso e aggiungendola alle carte nella mano del tuo avversario.",
			pt: "Reverta a evolução de 1 dos Pokémon evoluídos do seu oponente colocando a carta de Evolução de Estágio mais alto sobre ele na mão do seu oponente.",
			de: "Rückentwickle 1 entwickeltes Pokémon deines Gegners, indem du deinem Gegner die Karte mit der höchsten Entwicklungsphase auf die Hand gibst."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
			es: "Drenaje Espiral",
			it: "Assorbimento Spirale",
			pt: "Dreno Espiral",
			de: "Spiralsauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Flittle"
	}
}

export default card
