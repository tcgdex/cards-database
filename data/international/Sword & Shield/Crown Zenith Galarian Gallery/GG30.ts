import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Pika Dash",
			'fr-fr': "Pika Ruée",
			'es-es': "Pika Carrera",
			'it-it': "Pikascatto",
			'pt-br': "Arremetida Pikachu",
			'de-de': "Pikaspurt"
		},

		effect: {
			'en-us': "If this Pokémon has any Energy attached, it has no Retreat Cost.",
			'fr-fr': "Si de l'Énergie est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'es-es': "Si este Pokémon tiene alguna Energía unida a él, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon tiver alguma Energia ligada a ele, não terá custo de Recuo.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Whimsy Tackle",
			'fr-fr': "Charge Bizarre",
			'es-es': "Placaje Caprichoso",
			'it-it': "Capriccioazione",
			'pt-br': "Investida Fantástica",
			'de-de': "Launischer Tackle"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691909,
				tcgplayer: 478058
			}
		},
	],
}

export default card
