import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "In a Hungry Hurry",
			fr: "Faim Urgente",
			es: "Con Hambre y a lo Loco",
			it: "Fretta Famelica",
			pt: "Afobado de Fome",
			de: "In hungriger Hast"
		},

		effect: {
			en: "If this Pokémon has no Energy attached, it has no Retreat Cost.",
			fr: "Si aucune Énergie n'est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			es: "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon non ha Energie assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon não tiver nenhuma Energia ligada a ele, não terá custo de Recuo.",
			de: "Wenn an dieses Pokémon keine Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Energizer Wheel",
			fr: "Roue Énergisante",
			es: "Rueda Vigorizante",
			it: "Ruota Energizzante",
			pt: "Roda Energizante",
			de: "Energiespendendes Rad"
		},

		effect: {
			en: "Move 2 Darkness Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez 2 Énergies Darkness de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 2 Energías Darkness de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Sposta due Energie Darkness da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova 2 Energias Darkness deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe 2 Darkness-Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card