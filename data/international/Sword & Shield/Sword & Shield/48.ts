import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
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

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it."
	},

	thirdParty: {
		cardmarket: 427241,
		tcgplayer: 208347
	}
}

export default card
