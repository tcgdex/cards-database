import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [671],
	set: Set,

	name: {
		en: "Florges",
		fr: "Florges",
		es: "Florges",
		it: "Florges",
		pt: "Florges",
		de: "Florges"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Floette"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Blooming Garden",
			fr: "Jardin Florissant",
			es: "Jardín Floreciente",
			it: "Giardino in Fiore",
			pt: "Florescer do Jardim",
			de: "Florierender Garten"
		},

		effect: {
			en: "Your Pokémon in play have no Weakness.",
			fr: "Vos Pokémon en jeu n'ont pas de Faiblesse.",
			es: "Tus Pokémon en juego no tienen Debilidad.",
			it: "I tuoi Pokémon in gioco non hanno debolezza.",
			pt: "Seus Pokémon em jogo não têm Fraqueza.",
			de: "Deine Pokémon im Spiel haben keine Schwächen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Moonblast",
			fr: "Pouvoir Lunaire",
			es: "Fuerza Lunar",
			it: "Forza Lunare",
			pt: "Explosão Lunar",
			de: "Mondgewalt"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Haru Akasaka",

	thirdParty: {
        cardmarket: 702389,
        tcgplayer: 487960
    }
}

export default card