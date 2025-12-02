import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gabite",
		fr: "Carmache",
		es: "Gabite",
		it: "Gabite",
		de: "Knarksel",
		'pt-br': "Gabite",
		ko: "한바이트"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [444],
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Gible"
	},

	description: {
		en: "In rare cases, it molts and sheds its scales. Medicine containing its scales as an ingredient will make a weary body feel invigorated.",
		fr: "Lorsqu'il mue, il perd parfois ses écailles. Les remèdes\nconcoctés à partir de celles-ci sont de puissants toniques.",
		es: "Muy ocasionalmente puede mudar la piel y\nperder las escamas. Las medicinas que las usan\ncomo ingrediente son muy reconstituyentes.",
		it: "Fa la muta molto di rado. Con le scaglie perse\nin questo modo si possono preparare tonici che\nalleviano la stanchezza e ripristinano le energie.",
		de: "Ab und zu häutet es sich und verliert Schuppen.\nMedizin, die solche Schuppen enthält, macht\nmüde Körper munter.",
		'pt-br': "Troca de pele raramente e deixa suas escamas para trás.\nRemédios feitos com suas escamas farão um adoecido\nsentir-se revigorado.",
		ko: "드물게 탈피해서 비늘이 벗겨진다.\n그 성분이 들어 있는 약은\n피곤한 몸을 회복시켜 준다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			de: "Schlitzer",
			'pt-br': "Talho",
			ko: "베어가르기"
		},

		damage: 60,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
