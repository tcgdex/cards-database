import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Delibird",
		fr: "Cadoizo",
		es: "Delibird",
		'es-mx': "Delibird",
		de: "Botogel",
		it: "Delibird",
		pt: "Delibird"
	},

	illustrator: "Saboteri",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [225],
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pleasing Present",
			fr: "Cadeau Plaisant",
			es: "Obsequio Gratificante",
			'es-mx': "Lindo Obsequio",
			de: "Gefälliges Geschenk",
			it: "Regalo Gradito",
			pt: "Presentão"
		},

		cost: ["Colorless"],

		effect: {
			en: "Each player may attach up to 3 Basic Energy cards from their hand to their Pokémon in any way they like. Your opponent does this first.",
			fr: "Chaque personne peut attacher jusqu'à 3 cartes Énergie de base de sa main à ses Pokémon comme il lui plaît. Votre adversaire le fait en premier.",
			es: "Cada jugador puede unir hasta 3 cartas de Energía Básica de su mano a sus Pokémon de la manera que desee. Tu rival lo hace primero.",
			'es-mx': "Cada jugador puede unir hasta 3 cartas de Energía Básica de su mano a sus Pokémon de la manera que quiera. Tu rival lo hace primero.",
			de: "Jeder Spieler kann bis zu 3 Basis-Energiekarten aus seiner Hand beliebig an seine Pokémon anlegen. Dein Gegner macht dies zuerst.",
			it: "Ciascun giocatore può assegnare ai propri Pokémon fino a tre carte Energia base dalla propria mano nel modo che preferisce. Il tuo avversario lo fa per primo.",
			pt: "Cada jogador pode ligar até 3 cartas de Energia Básica da própria mão aos próprios Pokémon como desejar. Seu oponente faz isso primeiro."
		}
	}, {
		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			'es-mx': "Aleteo",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa"
		},

		cost: ["Colorless", "Colorless"],
		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693472
	}
}

export default card