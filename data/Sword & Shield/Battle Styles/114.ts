import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [463],
	set: Set,

	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		es: "Lickilicky",
		it: "Lickilicky",
		pt: "Lickilicky",
		de: "Schlurplek"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
		es: "Lickitung",
		it: "Lickitung",
		pt: "Lickitung",
		de: "Schlurp"
	},

	attacks: [{
		name: {
			en: "Selickt",
			fr: "Séleclangue",
			es: "Elección Lametazo",
			it: "Sceglilingua",
			pt: "Escolhambida",
			de: "Bitteres Angebot"
		},

		effect: {
			en: "Your opponent chooses to discard the top 3 cards of their deck or to discard 3 cards from their hand.",
			fr: "Votre adversaire choisit de défausser les 3 cartes du dessus de son deck ou 3 cartes de sa main.",
			es: "Tu rival elige entre descartar las 3 primeras cartas de su baraja o descartar 3 cartas de su mano.",
			it: "Il tuo avversario sceglie se scartare le prime tre carte del suo mazzo o tre carte che ha in mano.",
			pt: "Seu oponente escolhe entre descartar as 3 cartas de cima do baralho dele(a) ou descartar 3 cartas da mão dele(a).",
			de: "Dein Gegner wählt, ob er die obersten 3 Karten seines Decks oder 3 Karten aus seiner Hand auf seinen Ablagestapel legt."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Pitch",
			fr: "Lancer",
			es: "Arrojar",
			it: "Spingivia",
			pt: "Lançamento",
			de: "Einwerfen"
		},

		effect: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It uses its tongue much more skillfully than its hands or its feet. It can deftly pick up a single small bean with its tongue."
	},

	thirdParty: {
		cardmarket: 545656,
		tcgplayer: 234155
	}
}

export default card
