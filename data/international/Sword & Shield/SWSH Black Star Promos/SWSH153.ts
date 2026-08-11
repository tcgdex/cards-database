import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu",
		'de-de': "Pikachu",
		'es-es': "Pikachu",
		'pt-br': "Pikachu",
		'it-it': "Pikachu",
		'en-us': "Pikachu"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'fr-fr': "Donnerschock",
			'de-de': "Éclair",
			'es-es': "Tuonoshock",
			'pt-br': "Trovoada de Choques",
			'it-it': "Impactrueno",
			'en-us': "Thunder Shock"
		},

		effect: {
			'fr-fr': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'de-de': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "D",

	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	thirdParty: {
		cardmarket: 461594
	}
}

export default card
