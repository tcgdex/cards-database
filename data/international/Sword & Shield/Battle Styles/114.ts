import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [463],
	set: Set,

	name: {
		'en-us': "Lickilicky",
		'fr-fr': "Coudlangue",
		'es-es': "Lickilicky",
		'it-it': "Lickilicky",
		'pt-br': "Lickilicky",
		'de-de': "Schlurplek"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},

	attacks: [{
		name: {
			'en-us': "Selickt",
			'fr-fr': "Séleclangue",
			'es-es': "Elección Lametazo",
			'it-it': "Sceglilingua",
			'pt-br': "Escolhambida",
			'de-de': "Bitteres Angebot"
		},

		effect: {
			'en-us': "Your opponent chooses to discard the top 3 cards of their deck or to discard 3 cards from their hand.",
			'fr-fr': "Votre adversaire choisit de défausser les 3 cartes du dessus de son deck ou 3 cartes de sa main.",
			'es-es': "Tu rival elige entre descartar las 3 primeras cartas de su baraja o descartar 3 cartas de su mano.",
			'it-it': "Il tuo avversario sceglie se scartare le prime tre carte del suo mazzo o tre carte che ha in mano.",
			'pt-br': "Seu oponente escolhe entre descartar as 3 cartas de cima do baralho dele(a) ou descartar 3 cartas da mão dele(a).",
			'de-de': "Dein Gegner wählt, ob er die obersten 3 Karten seines Decks oder 3 Karten aus seiner Hand auf seinen Ablagestapel legt."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Pitch",
			'fr-fr': "Lancer",
			'es-es': "Arrojar",
			'it-it': "Spingivia",
			'pt-br': "Lançamento",
			'de-de': "Einwerfen"
		},

		effect: {
			'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It uses its tongue much more skillfully than its hands or its feet. It can deftly pick up a single small bean with its tongue."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545656,
				tcgplayer: 234155
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545656,
				tcgplayer: 234155
			}
		},
	],
}

export default card
