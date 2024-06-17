import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		en: "Cramorant",
		fr: "Nigosier",
		es: "Cramorant",
		it: "Cramorant",
		pt: "Cramorant",
		de: "Urgl"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lost Provisions",
			fr: "Provisions Perdues",
			es: "Provisiones Perdidas",
			it: "Scorte Perdute",
			pt: "Suprimentos Perdidos",
			de: "Nirgendwo-Vorrat"
		},

		effect: {
			en: "If you have 4 or more cards in the Lost Zone, ignore all Energy in this Pokémon's attack costs.",
			fr: "Si vous avez 4 cartes ou plus dans la Zone Perdue, ignorez toutes les Énergies dans le coût des attaques de ce Pokémon.",
			es: "Si tienes 4 cartas o más en la Zona Perdida, ignora todas las Energías en el coste de los ataques de este Pokémon.",
			it: "Se hai quattro o più carte nell'area perduta, ignora tutte le Energie necessarie per usare gli attacchi di questo Pokémon.",
			pt: "Se você tiver 4 ou mais cartas na Zona Perdida, ignore todas as Energias nos custos dos ataques deste Pokémon.",
			de: "Wenn du 4 oder mehr Karten im Nirgendwo hast, ignoriere alle Energien in den Attackenkosten dieses Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Spit Innocently",
			fr: "Rejet Innocent",
			es: "Escupitajo Inocente",
			it: "Candidosputo",
			pt: "Cusparada Inocente",
			de: "Unschuldiges Spucken"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			es: "El daño de este ataque no se ve afectado por Debilidad.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza.",
			pt: "O dano deste ataque não é afetado por Fraqueza.",
			de: "Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card