import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dracaufeu VMAX",
		en: "Charizard VMAX",
		es: "Charizard VMAX",
		it: "Charizard VMAX",
		pt: "Charizard VMAX",
		de: "Glurak VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		fr: "Dracaufeu-V",
		en: "Charizard V"
	},

	attacks: [{
		name: {
			fr: "Tranch'Griffe",
			en: "Claw Slash",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Fournaise G-Max",
			en: "G-Max Wildfire",
			es: "Gigallamarada",
			it: "Gigavampa",
			pt: "Queimada G-Max",
			de: "Giga-Feuerflug"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			en: "Discard 2 Energy from this Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 300,
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX",

	thirdParty: {
		cardmarket: 539923
	}
}

export default card
