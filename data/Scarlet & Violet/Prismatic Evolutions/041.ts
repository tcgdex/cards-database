import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon ex",
		fr: "Nymphali-ex",
		es: "Sylveon ex",
		pt: "Sylveon ex",
		it: "Sylveon-ex",
		de: "Feelinara-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Charm",
			fr: "Fascination Magique",
			es: "Encanto Mágico",
			pt: "Encanto Mágico",
			it: "Fascino Magico",
			de: "Magischer Charme"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 100 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 100 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 100 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 100 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 100 danni in meno, prima di aver applicato debolezza e resistenza.",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 100 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 160
	}, {
		cost: ["Water", "Lightning", "Psychic"],

		name: {
			en: "Angelite",
			fr: "Angélite",
			es: "Angelita",
			pt: "Angelita",
			it: "Angelite",
			de: "Angelit"
		},

		effect: {
			en: "Choose 2 of your opponent's Benched Pokémon. Shuffle those Pokémon and all attached cards into your opponent's deck. If 1 of your Pokémon used Angelite during your last turn, this attack can't be used.",
			fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Mélangez avec son deck ces Pokémon-là et toutes les cartes qui leur sont attachées. Si l'un de vos Pokémon a utilisé Angélite pendant votre dernier tour, cette attaque ne peut pas être utilisée.",
			es: "Elige 2 de los Pokémon en Banca de tu rival. Pon esos Pokémon y todas las cartas unidas a ellos en la baraja de tu rival y barájalas todas. Si uno de tus Pokémon usó Angelita durante tu último turno, este ataque no se puede usar.",
			pt: "Escolha 2 dos Pokémon no Banco do seu oponente. Embaralhe aqueles Pokémon e todas as cartas ligadas a eles no baralho do seu oponente. Se 1 dos seus Pokémon usou Angelita durante o seu último turno, este ataque não poderá ser usado.",
			it: "Scegli due dei Pokémon nella panchina del tuo avversario. Rimischia quei Pokémon e tutte le carte a essi assegnate nel suo mazzo. Se uno dei tuoi Pokémon ha usato Angelite durante il tuo ultimo turno, questo attacco non può essere usato.",
			de: "Wähle 2 Pokémon auf der Bank deines Gegners. Mische jene Pokémon und alle angelegten Karten in das Deck deines Gegners. Wenn 1 deiner Pokémon während deines letzten Zuges Angelit eingesetzt hat, kann diese Attacke nicht eingesetzt werden."
		}
	}],

	retreat: 2,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card