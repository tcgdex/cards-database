import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [289],
	set: Set,

	name: {
		en: "Slaking V",
		fr: "Monaflèmit V",
		es: "Slaking V",
		it: "Slaking V",
		pt: "Slaking V",
		de: "Letarking V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Kinda Lazy",
			fr: "Tire-au-Flanc",
			es: "Remolón",
			it: "Pigritudine",
			pt: "Preguicento",
			de: "Faulpelz"
		},

		effect: {
			en: "If you have exactly 2, 4, or 6 Prize cards remaining, this Pokémon can't attack.",
			fr: "S'il vous reste exactement 2, 4 ou 6 cartes Récompense, ce Pokémon ne peut pas attaquer.",
			es: "Si te quedan exactamente 2, 4 o 6 cartas de Premio, este Pokémon no puede atacar.",
			it: "Se hai esattamente due, quattro o sei carte Premio rimanenti, questo Pokémon non può attaccare.",
			pt: "Se você tiver exatamente 2, 4 ou 6 cartas de Prêmio restantes, este Pokémon não poderá atacar.",
			de: "Wenn du genau 2, 4 oder 6 verbleibende Preiskarten hast, kann dieses Pokémon nicht angreifen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 260
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card
