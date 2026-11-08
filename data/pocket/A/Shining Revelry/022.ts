import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu ex",
		'fr-fr': "Pikachu-ex",
		'es-es': "Pikachu ex",
		'it-it': "Pikachu-ex",
		'de-de': "Pikachu-ex",
		'pt-br': "Pikachu ex",
		'ko-kr': "피카츄 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [25],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'de-de': "Donnerblitz",
			'pt-br': "Relâmpago",
			'ko-kr': "10만볼트"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Rimuovi tutte le Energie assegnate a questo Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon ab.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'ko-kr': "이 포켓몬에서 에너지를 모두 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card