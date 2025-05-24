import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [350],
	set: Set,

	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		pt: "Milotic",
		de: "Milotic"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mentally Calm",
			fr: "Calme Mental",
			es: "Calma Mental",
			it: "Serenamente",
			pt: "Calmaria Mental",
			de: "Innere Ruhe"
		},

		effect: {
			en: "Your opponent's Pokémon in play and all attached cards can't be put into your opponent's hand.",
			fr: "Les Pokémon en jeu de votre adversaire et toutes les cartes attachées ne peuvent pas être ajoutés à la main de votre adversaire.",
			es: "Los Pokémon en juego de tu rival y todas las cartas unidas a ellos no pueden ponerse en la mano de tu rival.",
			it: "I Pokémon in gioco del tuo avversario e tutte le carte a essi assegnate non possono essere aggiunti alle carte che ha in mano.",
			pt: "Os Pokémon do seu oponente em jogo e todas as cartas ligadas a eles não podem ser colocados na mão do seu oponente.",
			de: "Die Pokémon deines Gegners im Spiel und alle angelegten Karten können nicht auf die Hand deines Gegners genommen werden."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			de: "Hydroplatscher"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Taira Akitsu"
}

export default card