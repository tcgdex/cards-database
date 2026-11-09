import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Altaria",
		fr: "Altaria",
		de: "Altaria",
		es: "Altaria",
		it: "Altaria",
		pt: "Altaria",
		'es-mx': "Altaria"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cottony Carrier",
			fr: "Transporteur Cotonneux",
			de: "Bauschige Beförderung",
			es: "Porteador Algodonado",
			it: "Corriere Cotonato",
			pt: "Carona de Algodão",
			'es-mx': "Transporte Algodonado"
		},

		effect: {
			en: "Your Basic Pokémon in play have no Retreat Cost.",
			fr: "Vos Pokémon de base en jeu n'ont pas de Coût de Retraite.",
			de: "Deine Basis-Pokémon im Spiel haben keine Rückzugskosten.",
			es: "Tus Pokémon Básicos en juego no tienen ningún Coste de Retirada.",
			it: "I tuoi Pokémon Base in gioco non hanno costo di ritirata.",
			pt: "Seus Pokémon Básicos em jogo não têm Custo de Recuo.",
			'es-mx': "Tus Pokémon Básicos en juego no tienen ningún Costo de Retirada."
		}
	}],

	attacks: [{
		name: {
			en: "Flap",
			fr: "Battement",
			de: "Flattern",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			'es-mx': "Aleteo"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 728047,
		cardmarket: 918910
	}
}

export default card