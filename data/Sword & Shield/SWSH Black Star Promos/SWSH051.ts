import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	illustrator: "Megumi Higuchi",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Aqua Wash",
			fr: "Aqua-Lavage",
			es: "Limpieza Acuática",
			it: "Idrolavaggio",
			pt: "Aqua Wash",
			de: "Aquawäsche"
		},

		effect: {
			en: "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire jusqu'à 2 Énergies attachées à son Pokémon Actif.",
			es: "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
			it: "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			pt: "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
			de: "Du kannst deinem Gegner 2 an sein Aktives Pokémon angelegte Energien auf seine Hand geben."
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
		en: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it."
	},

	stage: "Basic",
	dexId: [131],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
