import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Togedemaru",
		es: "Togedemaru"
	},

	illustrator: "sowsow",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [777],
	hp: 80,
	types: ["Metal"],

	description: {
		en: "With the long hairs on its back, this Pokémon\ntakes in electricity from other electric Pokémon.\nIt stores what it absorbs in an electric sac.",
		es: "Utiliza el apéndice de la cabeza para absorber los raoys o los\nataques de los Pokémon de tipo Eléctrico para recargar su bolsa."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bristling Spikes",
			es: "Púas Erizadas"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 30 damage to the Attacking Pokémon.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque, el Pokémon Atacante sufre 30 puntos de daño."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card