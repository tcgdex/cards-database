import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora",
		es: "Zeraora"
	},

	illustrator: "GIDORA",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [807],
	hp: 90,
	types: ["Lightning"],

	description: {
		en: "It electrifies its claws and tears its opponents\napart with them. Even if they dodge its attack,\nthey'll be electrocuted by the flying sparks.",
		es: "Hace jirones al oponente con sus garras electrificadas. Aunque\neste esquive los golpes, acaba electrocutado por las descargas."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thunderclap Flash",
			es: "Destello Fulgurante"
		},

		effect: {
			en: "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			es: "Al final de tu primer turno, se unirá 1 Energía {L} de tu área de Energía a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Lightning Claw",
			es: "Garra Relámpago" 
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card