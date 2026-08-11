import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Aqua Wash",
			'fr-fr': "Aqua-Lavage",
			'es-es': "Limpieza Acuática",
			'it-it': "Idrolavaggio",
			'pt-br': "Limpeza Aquática",
			'de-de': "Aquawäsche"
		},

		effect: {
			'en-us': "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
			'fr-fr': "Vous pouvez ajouter à la main de votre adversaire jusqu'à 2 Énergies attachées à son Pokémon Actif.",
			'es-es': "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
			'it-it': "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			'pt-br': "Você pode colocar 2 Energias ligadas ao Pokémon Ativo do seu oponente na mão dele(a).",
			'de-de': "Du kannst deinem Gegner 2 an sein Aktives Pokémon angelegte Energien auf seine Hand geben."
		},

		damage: 70,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,

	description: {
		'en-us': "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it."
	},

	stage: "Basic",
	dexId: [131],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 505895
	}
}

export default card
