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
			en: "Overdrive Smash",
			fr: "Boost Atomisant",
			es: "Sacudida Superdirecta",
			it: "Devastacolpo",
			de: "Turbosmash",
			'pt-br': "Golpe Exaustivo",
			ko: "오버스매시"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "During your next turn, this Pokémon's Overdrive Smash attack does +60 damage.",
			fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige + 60 dégâts.",
			es: "Durante tu próximo turno, el ataque Sacudida Superdirecta de este Pokémon hace Overdrive Smash+60 puntos[/Ctrl:NoBreak] de daño.",
			it: "Durante il tuo prossimo turno, l'attacco Devastacolpo di questo Pokémon infligge +60 danni.",
			de: "Während deines nächsten Zuges fügt die Attacke Turbosmash von diesem Pokémon + 60 Schadenspunkte zu.",
			'pt-br': "Durante o seu próximo turno, o ataque Golpe Exaustivo deste Pokémon causará + 60 pontos de dano.",
			ko: "자신의 다음 차례에 이 포켓몬의 「오버스매시」의 데미지를 +60한다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
