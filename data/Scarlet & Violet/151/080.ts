import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Flagadoss",
		en: "Slowbro",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Gros Bâillement",
			en: "Big Yawn",
			es: "Gran Bostezo",
			it: "Gransbadiglio",
			pt: "Grande Bocejo",
			de: "Großer Gähner"
		},

		effect: {
			fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
			en: "Both Active Pokémon are now Asleep.",
			es: "Ambos Pokémon Activos pasan a estar Dormidos.",
			it: "Entrambi i Pokémon attivi vengono addormentati.",
			pt: "Ambos os Pokémon Ativos agora estão Adormecidos.",
			de: "Beide Aktiven Pokémon schlafen jetzt."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Charge Relaxe",
			en: "Laid-Back Tackle",
			es: "Placaje Relajado",
			it: "Azione Rilassata",
			pt: "Investida Relaxada",
			de: "Träger Tackle"
		},

		effect: {
			fr: "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
			en: "If this Pokémon evolved during this turn, this attack does nothing.",
			es: "Si este Pokémon ha evolucionado durante este turno, este ataque no hace nada.",
			it: "Se questo Pokémon si è evoluto durante questo turno, questo attacco non ha effetto.",
			pt: "Se este Pokémon evoluiu durante este turno, este ataque não fará nada.",
			de: "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, hat diese Attacke keine Auswirkungen."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card