import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Morpeko",
		'fr-fr': "Morpeko",
		'es-es': "Morpeko",
		'it-it': "Morpeko",
		'pt-br': "Morpeko",
		'de-de': "Morpeko"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "In a Hungry Hurry",
			'fr-fr': "Faim Urgente",
			'es-es': "Con Hambre y a lo Loco",
			'it-it': "Fretta Famelica",
			'pt-br': "Afobado de Fome",
			'de-de': "In hungriger Hast"
		},

		effect: {
			'en-us': "If this Pokémon has no Energy attached, it has no Retreat Cost.",
			'fr-fr': "Si aucune Énergie n'est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'es-es': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon non ha Energie assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon não tiver nenhuma Energia ligada a ele, não terá custo de Recuo.",
			'de-de': "Wenn an dieses Pokémon keine Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Energizer Wheel",
			'fr-fr': "Roue Énergisante",
			'es-es': "Rueda Vigorizante",
			'it-it': "Ruota Energizzante",
			'pt-br': "Roda Energizante",
			'de-de': "Energiespendendes Rad"
		},

		effect: {
			'en-us': "Move 2 {D} Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez 2 Énergies {D} de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 2 Energías {D} de este Pokémon a uno de tus Pokémon en Banca.",
			'it-it': "Sposta due Energie {D} da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova 2 Energias {D} deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 2 {D}-Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Hunger hormones affect its temperament. Until its hunger is appeased, it gets up to all manner of evil deeds.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740749,
				tcgplayer: 523887,
				cardtrader: 265552
			}
		},
	],

	illustrator: "Yuu Nishida",

	
}

export default card
