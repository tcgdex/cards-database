import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor",
			de: "Klammer"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Devour",
			fr: "Voracité",
			es: "Devorar",
			it: "Divoratore",
			pt: "Devorar",
			de: "Verschlinger"
		},

		effect: {
			en: "For each of your Durant in play, discard the top card of your opponent's deck.",
			fr: "Pour chacun de vos Fermite en jeu, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Por cada uno de tus Durant en juego, descarta la primera carta de la baraja de tu rival.",
			it: "Per ogni tuo Durant in gioco, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Para cada um dos seus Durant em jogo, descarte a carta de cima do baralho do seu oponente.",
			de: "Lege für jedes deiner Fermicula im Spiel die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda."
	}
}

export default card