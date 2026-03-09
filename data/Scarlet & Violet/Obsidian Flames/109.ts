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
	evolveFrom: {
		fr: "Barloche",
		en: "Barboach",
		es: "Barboach",
		it: "Barboach",
		pt: "Barboach",
		de: "Schmerbe"
	},
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
			fr: "Pour chaque Énergie {F} attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			en: "For each {F} Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			es: "Por cada Energía {F} unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			it: "Per ogni Energia {F} assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Para cada Energia {F} ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
			de: "Lege für jede an dieses Pokémon angelegte {F}-Energie die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
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
	},

	illustrator: "0313",

	thirdParty: {
		cardmarket: 725189
	}
}

export default card