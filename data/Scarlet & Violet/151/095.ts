import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [95],
	set: Set,

	name: {
		fr: "Onix",
		en: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Avalanche Retentissante",
			en: "Thumpalanche",
			es: "Alud Descomunal",
			it: "Valanga di Colpi",
			pt: "Avalanche Feroz",
			de: "Gerölllawine"
		},

		effect: {
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque Pokémon défaussé de cette façon et qui a un Coût de Retraite de 4.",
			en: "Discard the top 5 cards of your deck. This attack does 80 damage for each Pokémon with a Retreat Cost of exactly 4 that you discarded in this way.",
			es: "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada Pokémon con un Coste de Retirada de exactamente 4 que hayas descartado de esta manera.",
			it: "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 80 danni per ogni Pokémon con un costo di ritirata esattamente pari a quattro che hai scartato in questo modo.",
			pt: "Descarte as 5 cartas de cima do seu baralho. Este ataque causa 80 pontos de dano para cada Pokémon com um custo de Recuo de exatamente 4 descartado desta forma.",
			de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jedes Pokémon mit Rückzugskosten von genau 4, das du auf diese Weise auf deinen Ablagestapel gelegt hast, 80 Schadenspunkte zu."
		},

		damage: "80×"
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Gros Impact",
			en: "Heavy Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 100
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Shin Nagasawa"
}

export default card