import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [671],
	set: Set,

	name: {
		'en-us': "Florges",
		'fr-fr': "Florges",
		'es-es': "Florges",
		'it-it': "Florges",
		'pt-br': "Florges",
		'de-de': "Florges"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Floette",
		'fr-fr': "Floette"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Blooming Garden",
			'fr-fr': "Jardin Florissant",
			'es-es': "Jardín Floreciente",
			'it-it': "Giardino in Fiore",
			'pt-br': "Florescer do Jardim",
			'de-de': "Florierender Garten"
		},

		effect: {
			'en-us': "Your Pokémon in play have no Weakness.",
			'fr-fr': "Vos Pokémon en jeu n'ont pas de Faiblesse.",
			'es-es': "Tus Pokémon en juego no tienen Debilidad.",
			'it-it': "I tuoi Pokémon in gioco non hanno debolezza.",
			'pt-br': "Seus Pokémon em jogo não têm Fraqueza.",
			'de-de': "Deine Pokémon im Spiel haben keine Schwächen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Moonblast",
			'fr-fr': "Pouvoir Lunaire",
			'es-es': "Fuerza Lunar",
			'it-it': "Forza Lunare",
			'pt-br': "Explosão Lunar",
			'de-de': "Mondgewalt"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Haru Akasaka",

	description: {
		'en-us': "They say that flower gardens created by Florges are constantly showered with a power that can heal both body and spirit.",
	},

	thirdParty: {
        cardmarket: 702389,
        tcgplayer: 487960
    }
}

export default card