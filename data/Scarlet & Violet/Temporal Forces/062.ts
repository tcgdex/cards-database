import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [995],
	set: Set,

	name: {
		en: "Iron Thorns",
		fr: "Épine-de-Fer",
		es: "Ferropúas",
		it: "Spineferree",
		pt: "Espinhos Férreos",
		de: "Eisendorn"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Destructo-Press",
			fr: "Destructo-Pression",
			es: "Empuje Destructor",
			it: "Pressa Distruttrice",
			pt: "Aperto Destrutivo",
			de: "Zerstörungsdruck"
		},

		effect: {
			en: "Reveal the top 5 cards of your deck. This attack does 70 damage for each Future card you find there. Then, discard those Future cards and shuffle the other cards back into your deck.",
			fr: "Montrez les 5 cartes du dessus de votre deck. Cette attaque inflige 70 dégâts pour chaque carte Temps futur que vous y trouvez. Défaussez ensuite ces cartes Temps futur et mélangez les autres cartes avec votre deck.",
			es: "Enseña las 5 primeras cartas de tu baraja. Este ataque hace 70 puntos de daño por cada carta del futuro que encuentres entre ellas. Después, descarta esas cartas del futuro, pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Mostra le prime cinque carte del tuo mazzo. Questo attacco infligge 70 danni per ogni carta Tempo Futuro presente tra quelle carte. Poi scarta quelle carte Tempo Futuro e rimischia le altre carte nel tuo mazzo.",
			pt: "Revele as 5 cartas de cima do seu baralho. Este ataque causa 70 pontos de dano para cada carta Futurista que encontrar lá. Em seguida, descarte aquelas cartas Futuristas e embaralhe as outras cartas de volta no seu baralho.",
			de: "Zeige deinem Gegner die obersten 5 Karten deines Decks. Diese Attacke fügt für jede Zukunftskarte, die du dort findest, 70 Schadenspunkte zu. Lege anschließend jene Zukunftskarten auf deinen Ablagestapel und mische die anderen Karten zurück in dein Deck."
		},

		damage: "70×"
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Megaton Lariat",
			fr: "Lasso Titanesque",
			es: "Lazo Megatón",
			it: "Lazo Megatonico",
			pt: "Lariat Megaton",
			de: "Megatonnenlasso"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Takeshi Nakamura"
}

export default card
