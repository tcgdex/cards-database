import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Yanmega ex",
		fr: "Yanmega-ex",
		es: "Yanmega ex",
		it: "Yanmega-ex",
		de: "Yanmega-ex",
		'pt-br': "Yanmega ex",
		ko: "메가자리 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Yanma"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
			es: "Tajo Aéreo",
			it: "Eterelama",
			de: "Luftschnitt",
			'pt-br': "Golpe de Ar",
			ko: "에어슬래시"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Discard a random Energy from this Pokémon.",
			fr: "Défaussez une Énergie au hasard de ce Pokémon.",
			es: "Descarta 1 Energía aleatoria de este Pokémon.",
			it: "Rimuovi un'Energia a caso da questo Pokémon.",
			de: "Lege 1 zufällige Energie von diesem Pokémon ab.",
			'pt-br': "Descarte Energia random deste Pokémon.",
			ko: "이 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia aleatória deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card