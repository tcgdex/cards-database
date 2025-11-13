import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [839],
	set: Set,

	name: {
		en: "Coalossal",
		fr: "Monthracite",
		es: "Coalossal",
		it: "Coalossal",
		pt: "Coalossal",
		de: "Montecarbo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine",
		es: "Carkol",
		it: "Carkol",
		pt: "Carkol",
		de: "Wagong"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Gatling Tar",
			fr: "Goudron Mitraillant",
			es: "Ráfaga de Alquitrán",
			it: "Mitragliacatrame",
			pt: "Disparador de Piche",
			de: "Teergeschütz"
		},

		effect: {
			en: "This attack does 80 more damage for each {R} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 80 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			es: "Este ataque hace 80 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			it: "Questo attacco infligge 80 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			pt: "Este ataque causa 80 pontos de dano a mais para cada Energia {R} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 80 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Cragalanche",
			fr: "Lapidalanche",
			es: "Rocalud",
			it: "Valanghiaia",
			pt: "Rochavalanche",
			de: "Grolllawine"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 760725
	}
}

export default card