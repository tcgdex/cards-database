import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Infernape",
		fr: "Simiabraz",
		es: "Infernape",
		it: "Infernape",
		pt: "Infernape",
		de: "Panferno"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
		es: "Monferno",
		it: "Monferno",
		pt: "Monferno",
		de: "Panpyro"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Infernal Vortex",
			fr: "Vortex Infernal",
			es: "Vórtice Infernal",
			it: "Vortice Infernale",
			pt: "Vórtice Infernal",
			de: "Infernalischer Wirbel"
		},

		effect: {
			en: "Reveal the top 5 cards of your deck. This attack does 80 damage for each Energy card you find there. Then, discard those Energy cards and shuffle the other cards back into your deck.",
			fr: "Montrez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque carte Énergie que vous y trouvez. Défaussez ensuite ces cartes Énergie et mélangez les autres cartes avec votre deck.",
			es: "Enseña las 5 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada carta de Energía que encuentres entre ellas. Después, descarta esas cartas de Energía, pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Mostra le prime cinque carte del tuo mazzo. Questo attacco infligge 80 danni per ogni carta Energia presente tra quelle carte. Poi scarta quelle carte Energia e rimischia le altre carte nel tuo mazzo.",
			pt: "Revele as 5 cartas de cima do seu baralho. Este ataque causa 80 pontos de dano para cada carta de Energia que encontrar lá. Em seguida, descarte aquelas cartas de Energia e embaralhe as demais cartas de volta no seu baralho.",
			de: "Zeige deinem Gegner die obersten 5 Karten deines Decks. Diese Attacke fügt für jede Energiekarte, die du dort findest, 80 Schadenspunkte zu. Lege anschließend jene Energiekarten auf deinen Ablagestapel und mische die anderen Karten zurück in dein Deck."
		},

		damage: "80×"
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Burning Kick",
			fr: "Coup de Pied Brûlant",
			es: "Patada Ardiente",
			it: "Calcio Fiammeggiante",
			pt: "Petardo",
			de: "Brennender Schuss"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card