import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		en: "Gallade",
		fr: "Gallame",
		es: "Gallade",
		it: "Gallade",
		pt: "Gallade",
		de: "Galagladi"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	attacks: [{
		name: {
			en: "Feint",
			fr: "Ruse",
			es: "Amago",
			it: "Fintoattacco",
			pt: "Fintar",
			de: "Offenlegung"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 60,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Dynablade",
			fr: "Dynalame",
			es: "Dinacuchilla",
			it: "Dinasquarcio",
			pt: "Lâmina Dinâmica",
			de: "Dynamische Klinge"
		},

		effect: {
			en: "This attack does 60 damage for each of your opponent's Pokémon V in play.",
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon-V en jeu de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada uno de los Pokémon V en juego de tu rival.",
			it: "Questo attacco infligge 60 danni per ogni Pokémon-V in gioco del tuo avversario.",
			pt: "Este ataque causa 60 pontos de dano para cada Pokémon V do seu oponente em jogo.",
			de: "Diese Attacke fügt für jedes Pokémon-V deines Gegners im Spiel 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Sharply attuned to others' wishes for help, this Pokémon seeks out those in need and aids them in battle."
	},

	thirdParty: {
		cardmarket: 567189
	}
}

export default card
