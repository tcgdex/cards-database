import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yanmega ex",
		'fr-fr': "Yanmega-ex",
		'es-es': "Yanmega ex",
		'it-it': "Yanmega-ex",
		'de-de': "Yanmega-ex",
		'pt-br': "Yanmega ex",
		'ko-kr': "메가자리 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [469],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Yanma"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'es-es': "Tajo Aéreo",
			'it-it': "Eterelama",
			'de-de': "Luftschnitt",
			'pt-br': "Golpe de Ar",
			'ko-kr': "에어슬래시"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Discard a random Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie au hasard de ce Pokémon.",
			'es-es': "Descarta 1 Energía aleatoria de este Pokémon.",
			'it-it': "Rimuovi un'Energia a caso da questo Pokémon.",
			'de-de': "Lege 1 zufällige Energie von diesem Pokémon ab.",
			
			'ko-kr': "이 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia aleatória deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card