import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Togekiss",
		fr: "Togekiss",
		es: "Togekiss",
		it: "Togekiss",
		de: "Togekiss",
		'pt-br': "Togekiss",
		ko: "토게키스"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Togetic"
	},

	description: {
		en: "These Pokémon are never seen anywhere near conflict or turmoil. In recent times, they've hardly been seen at all.",
		fr: "Il ne se montre jamais en temps de guerre ou de\nconflit. Ces derniers temps, il est rare de le croiser.",
		es: "Este Pokémon jamás se muestra en lugares\ndonde reine la discordia y la disensión.\nÚltimamente apenas se avistan ejemplares.",
		it: "Non appare dove è in corso un conflitto o\nun litigio. Di recente non si vede quasi mai.",
		de: "Es zeigt sich nie an Orten, wo Streit und\nZwietracht herrschen. In letzter Zeit wird es\nkaum noch gesehen.",
		'pt-br': "Estes Pokémon nunca são vistos perto de conflitos\nou confusão. Na verdade, têm sido vistos\nmuito raramente em tempos recentes.",
		ko: "분쟁이나 다툼이 일어나는\n장소에는 모습을 드러내지 않는다.\n최근에는 거의 보이지 않는다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Overdrive Smash"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "During your next turn, this Pokémon's  attack does +60 damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
