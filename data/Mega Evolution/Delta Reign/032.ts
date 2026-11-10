import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon",
		fr: "Voltali",
		de: "Blitza",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		'es-mx': "Jolteon"
	},

	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			de: "Donnerblitz",
			es: "Rayo",
			it: "Fulmine",
			pt: "Relâmpago",
			'es-mx': "Atactrueno"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 220,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 726522,
		cardmarket: 918848
	}
}

export default card