import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [350],
	set: Set,

	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'es-es': "Milotic",
		'it-it': "Milotic",
		'pt-br': "Milotic",
		'de-de': "Milotic"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mentally Calm",
			'fr-fr': "Calme Mental",
			'es-es': "Calma Mental",
			'it-it': "Serenamente",
			'pt-br': "Calmaria Mental",
			'de-de': "Innere Ruhe"
		},

		effect: {
			'en-us': "Your opponent's Pokémon in play and all attached cards can't be put into your opponent's hand.",
			'fr-fr': "Les Pokémon en jeu de votre adversaire et toutes les cartes attachées ne peuvent pas être ajoutés à la main de votre adversaire.",
			'es-es': "Los Pokémon en juego de tu rival y todas las cartas unidas a ellos no pueden ponerse en la mano de tu rival.",
			'it-it': "I Pokémon in gioco del tuo avversario e tutte le carte a essi assegnate non possono essere aggiunti alle carte che ha in mano.",
			'pt-br': "Os Pokémon do seu oponente em jogo e todas as cartas ligadas a eles não podem ser colocados na mão do seu oponente.",
			'de-de': "Die Pokémon deines Gegners im Spiel und alle angelegten Karten können nicht auf die Hand deines Gegners genommen werden."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-Éclaboussure",
			'es-es': "Hidroestallido",
			'it-it': "Idrosplash",
			'pt-br': "Hidroborrifada",
			'de-de': "Hydroplatscher"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It lives at the bottom of clear lakes. In times of war, it shows itself, which soothes people's minds and hearts.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769224,
				tcgplayer: 550094
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769224,
				tcgplayer: 550094
			}
		},
	],

	illustrator: "Taira Akitsu",

}

export default card