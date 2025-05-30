import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Florges",
		fr: "Florges",
		de: "Florges",
		it: "Florges",
		es: "Florges",
		pt: "Florges"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Blooming Garden",
			fr: "Jardin Florissant",
			de: "Florierender Garten",
			it: "Giardino in Fiore",
			es: "Jardín Floreciente",
			pt: "Florescer do Jardim"
		},

		effect: {
			en: "Your Pokémon in play have no Weakness.",
			fr: "Vos Pokémon en jeu n'ont pas de Faiblesse.",
			de: "Deine Pokémon im Spiel haben keine Schwächen.",
			it: "I tuoi Pokémon in gioco non hanno debolezza.",
			es: "Tus Pokémon en juego no tienen Debilidad.",
			pt: "Seus Pokémon em jogo não têm Fraqueza."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Moonblast",
			fr: "Pouvoir Lunaire",
			de: "Mondgewalt",
			it: "Forza Lunare",
			es: "Fuerza Lunar",
			pt: "Explosão Lunar"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card