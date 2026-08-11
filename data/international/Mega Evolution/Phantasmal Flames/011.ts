import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'es-mx': "Charmander",
		'de-de': "Glumanda",
		'it-it': "Charmander",
		'pt-br': "Charmander"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [4],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Agile",
			'fr-fr': "Agilité",
			'es-es': "Ligereza",
			'es-mx': "Ágil",
			'de-de': "Agil",
			'it-it': "Agile",
			'pt-br': "Sagaz"
		},

		effect: {
			'en-us': "If this Pokémon has no Energy attached, it has no Retreat Cost.",
			'fr-fr': "Si aucune Énergie n'est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'es-es': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Coste de Retirada.",
			'es-mx': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Costo de Retirada.",
			'de-de': "Wenn an dieses Pokémon keine Energie angelegt ist, hat es keine Rückzugskosten.",
			'it-it': "Se questo Pokémon non ha Energie assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon não tiver nenhuma Energia ligada a ele, não terá Custo de Recuo."
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'es-mx': "Carbón Activado",
			'de-de': "Glühende Kohlen",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
	},

	illustrator: "HYOGONOSUKE",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857586,
				tcgplayer: 662143,
				cardtrader: 356795
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857586,
				tcgplayer: 662143,
				cardtrader: 356795
			}
		},
	],
}

export default card
