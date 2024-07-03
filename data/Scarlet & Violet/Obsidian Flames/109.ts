import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [340],
	set: Set,

	name: {
		fr: "Barbicha",
		en: "Whiscash",
		es: "Whiscash",
		it: "Whiscash",
		pt: "Whiscash",
		de: "Welsar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Rage et Roulis",
			en: "Raging and Rocking",
			es: "Furia y Temblor",
			it: "Scossone Furioso",
			pt: "Sacudida Irada",
			de: "Wüten und Wackeln"
		},

		effect: {
			fr: "Pour chaque Énergie Fighting attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			en: "For each Fighting Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			es: "Por cada Energía Fighting unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			it: "Per ogni Energia Fighting assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Para cada Energia Fighting ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
			de: "Lege für jede an dieses Pokémon angelegte Fighting-Energie die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Écras'Terre",
			en: "Land Crush",
			es: "Aterrizaje",
			it: "Schiacciaterra",
			pt: "Aperto de Terra",
			de: "Schollenbrecher"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card