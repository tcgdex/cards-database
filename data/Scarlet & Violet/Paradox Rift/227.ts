import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity ex",
		fr: "Salarsen-ex",
		es: "Toxtricity ex",
		it: "Toxtricity-ex",
		pt: "Toxtricity ex",
		de: "Riffex-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Knocking Hammer",
			fr: "Marteau Frappeur",
			es: "Martillo Impacto",
			it: "Martello Battente",
			pt: "Martelo Detonador",
			de: "Klopfender Hammer"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 70
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Gaia Punk",
			fr: "Punk de Gaïa",
			es: "Gaia Punki",
			it: "Gaiapunk",
			pt: "Gaia Punk",
			de: "Gaia-Punk"
		},

		effect: {
			en: "Discard 3 Lightning Energy from your Pokémon.",
			fr: "Défaussez 3 Énergies Lightning de vos Pokémon.",
			es: "Descarta 3 Energías Lightning de tus Pokémon.",
			it: "Scarta tre Energie Lightning dai tuoi Pokémon.",
			pt: "Descarte 3 Energias Lightning dos seus Pokémon.",
			de: "Lege 3 Lightning-Energien von deinen Pokémon auf deinen Ablagestapel."
		},

		damage: 270
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card