import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [257],
	set: Set,

	name: {
		en: "Blaziken V",
		fr: "Braségali V",
		es: "Blaziken V",
		it: "Blaziken V",
		pt: "Blaziken V",
		de: "Lohgock V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
			es: "Patada Salto Alta",
			it: "Calcinvolo",
			pt: "Chute de Pulo Alto",
			de: "Turmkick"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin",
			fr: "Danse Flammes",
			es: "Giro Fuego",
			it: "Turbofuoco",
			pt: "Chama Furacão",
			de: "Feuerwirbel"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
