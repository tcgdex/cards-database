import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Bibarel",
		fr: "Castorno",
		es: "Bibarel",
		it: "Bibarel",
		de: "Bidifas",
		'pt-br': "Bibarel",
		ko: "비버통"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bidoof"
	},

	description: {
		en: "It busily makes its nest with stacks of branches and roots it has cut up with its sharp incisors.",
		fr: "Il tranche les branches et les racines de ses\nincisives aiguisées pour construire des barrages.",
		es: "Con sus incisivos roe ramas y raíces y las apila\npara construir sus madrigueras junto al río.",
		it: "Costruisce con zelo la tana in riva ai corsi d'acqua,\nlevigando radici e rami con gli affilati incisivi.",
		de: "Emsig durchbeißt es mit seinen scharfen Vorderzähnen\nWurzeln und Äste und baut daraus sein Nest.",
		'pt-br': "Ele monta seu ninho com pilhas de galhos e raízes\nde árvores que cortou com seus incisivos.",
		ko: "예리한 앞니로 갉아 얻은\n나뭇가지나 뿌리를 쌓아\n물가에 부지런히 보금자리를 만든다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			de: "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			ko: "구르기 태클"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
