import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		en: "Ice Rider Calyrex V",
		fr: "Sylveroy Cavalier du Froid V",
		es: "Calyrex Jinete Glacial V",
		it: "Calyrex Cavaliere Glaciale V",
		pt: "Calyrex Cavaleiro Glacial V",
		de: "Schimmelreiter-Coronospa V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Glacial Lance",
			fr: "Lance de Glace",
			es: "Lanza Glacial",
			it: "Lancia Glaciale",
			pt: "Lança Glacial",
			de: "Blizzardlanze"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658891
	}
}

export default card