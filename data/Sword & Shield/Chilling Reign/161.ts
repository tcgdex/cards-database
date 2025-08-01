import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Braségali V",
		en: "Blaziken V",
		es: "Blaziken V",
		it: "Blaziken V",
		pt: "Blaziken V",
		de: "Lohgock V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Pied Voltige",
			en: "High Jump Kick",
			es: "Patada Salto Alta",
			it: "Calcinvolo",
			pt: "Chute de Pulo Alto",
			de: "Turmkick"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Danse Flammes",
			en: "Fire Spin",
			es: "Giro Fuego",
			it: "Turbofuoco",
			pt: "Chama Furacão",
			de: "Feuerwirbel"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			en: "Discard 2 Energy from this Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 210,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 567100
	}
}

export default card
