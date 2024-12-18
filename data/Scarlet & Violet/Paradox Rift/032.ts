import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [230],
	set: Set,

	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		es: "Kingdra",
		it: "Kingdra",
		pt: "Kingdra",
		de: "Seedraking"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Whirltide",
			fr: "Marée Tourbillonnante",
			es: "Marea Remolino",
			it: "Marea Vorticosa",
			pt: "Redemoinho de Maré",
			de: "Gezeitenwirbel"
		},

		effect: {
			en: "Reveal the top 6 cards of your deck. This attack does 60 damage to 1 of your opponent's Pokémon for each Energy card you find there. Then, discard those Energy cards and shuffle the other cards back into your deck. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Montrez les 6 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire pour chaque carte Énergie que vous y trouvez. Défaussez ensuite ces cartes Énergie et mélangez les autres cartes avec votre deck. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Enseña las 6 primeras cartas de tu baraja. Este ataque hace 60 puntos de daño a uno de los Pokémon de tu rival por cada carta de Energía que encuentres entre ellas. Después, descarta esas cartas de Energía, pon el resto de las cartas de nuevo en tu baraja y barájalas todas. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Mostra le prime sei carte del tuo mazzo. Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario per ogni carta Energia presente tra quelle carte. Poi scarta quelle carte Energia e rimischia le altre carte nel tuo mazzo. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Revele as 6 cartas de cima do seu baralho. Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente para cada carta de Energia que encontrar lá. Em seguida, descarte aquelas cartas de Energia e embaralhe as outras cartas de volta no seu baralho. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Zeige deinem Gegner die obersten 6 Karten deines Decks. Diese Attacke fügt 1 Pokémon deines Gegners für jede Energiekarte, die du dort findest, 60 Schadenspunkte zu. Lege anschließend jene Energiekarten auf deinen Ablagestapel und mische die anderen Karten zurück in dein Deck. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			de: "Hydroplatscher"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
	}
}

export default card