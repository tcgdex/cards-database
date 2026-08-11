import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [427],
	set: Set,

	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'pt-br': "Buneary",
		'de-de': "Haspiror"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Try Bouncing",
			'fr-fr': "Bond d'Essai",
			'es-es': "Prueba Rebote",
			'it-it': "Balzoprova",
			'pt-br': "Tentativa Saltitante",
			'de-de': "Hüpfversuch"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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
	regulationMark: "F",


	description: {
		'en-us': "If both of Buneary's ears are rolled up, something is wrong with its body or mind. It's a sure sign the Pokémon is in need of care.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682191,
				tcgplayer: 451794
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682191,
				tcgplayer: 451794
			}
		},
	],
}

export default card
