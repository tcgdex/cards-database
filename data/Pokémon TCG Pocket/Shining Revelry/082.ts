import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		es: "Pikachu ex",
		it: "Pikachu-ex",
		de: "Pikachu-ex",
		'pt-br': "Pikachu ex",
		ko: "피카츄 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
			it: "Fulmine",
			de: "Donnerblitz",
			'pt-br': "Relâmpago",
			ko: "10만볼트"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Rimuovi tutte le Energie assegnate a questo Pokémon.",
			de: "Lege alle Energien von diesem Pokémon ab.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			ko: "이 포켓몬에서 에너지를 모두 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card