import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Toxel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Yank Away",
			fr: "Extirpation",
			es: "Tirón",
			it: "Strappa Via",
			pt: "Arrancão",
			de: "Entreißen"
		},

		effect: {
			en: "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
			fr: "Choisissez 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck.",
			es: "Elige 2 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
			it: "Scegli due carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
			pt: "Escolha 2 cartas aleatórias da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no baralho dele.",
			de: "Wähle 2 zufällige Karten aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			it: "Tuono",
			pt: "Trovão",
			de: "Donner"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card