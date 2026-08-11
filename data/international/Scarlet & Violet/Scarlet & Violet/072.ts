import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'en-us': "Toxtricity",
		'fr-fr': "Salarsen",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Yank Away",
			'fr-fr': "Extirpation",
			'es-es': "Tirón",
			'it-it': "Strappa Via",
			'pt-br': "Arrancão",
			'de-de': "Entreißen"
		},

		effect: {
			'en-us': "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
			'fr-fr': "Choisissez 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck.",
			'es-es': "Elige 2 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
			'it-it': "Scegli due carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
			'pt-br': "Escolha 2 cartas aleatórias da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no baralho dele.",
			'de-de': "Wähle 2 zufällige Karten aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'es-es': "Trueno",
			'it-it': "Tuono",
			'pt-br': "Trovão",
			'de-de': "Donner"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Atsushi Furusawa",

	description: {
		'en-us': "The jolts of electricity it launches by violently strumming the protrusions on its chest easily exceed 15,000 volts.",
	},

	thirdParty: {
        cardmarket: 702368,
        tcgplayer: 487926
    }
}

export default card