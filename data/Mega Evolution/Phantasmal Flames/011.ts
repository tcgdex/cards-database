import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		'es-mx': "Charmander",
		de: "Glumanda",
		it: "Charmander",
		pt: "Charmander"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [4],

	abilities: [{
		type: "Ability",

		name: {
			en: "Agile",
			fr: "Agilité",
			es: "Ligereza",
			'es-mx': "Ágil",
			de: "Agil",
			it: "Agile",
			pt: "Sagaz"
		},

		effect: {
			en: "If this Pokémon has no Energy attached, it has no Retreat Cost.",
			fr: "Si aucune Énergie n'est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			es: "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Coste de Retirada.",
			'es-mx': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Costo de Retirada.",
			de: "Wenn an dieses Pokémon keine Energie angelegt ist, hat es keine Rückzugskosten.",
			it: "Se questo Pokémon non ha Energie assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon não tiver nenhuma Energia ligada a ele, não terá Custo de Recuo."
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			'es-mx': "Carbón Activado",
			de: "Glühende Kohlen",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857586,
		tcgplayer: 662143
	}
}

export default card