import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bibarel",
		'fr-fr': "Castorno",
		'es-es': "Bibarel",
		'it-it': "Bibarel",
		'de-de': "Bidifas",
		'pt-br': "Bibarel",
		'ko-kr': "비버통"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [400],
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Bidoof"
	},

	description: {
		'en-us': "It busily makes its nest with stacks of branches and roots it has cut up with its sharp incisors.",
		'fr-fr': "Il tranche les branches et les racines de ses\nincisives aiguisées pour construire des barrages.",
		'es-es': "Con sus incisivos roe ramas y raíces y las apila\npara construir sus madrigueras junto al río.",
		'it-it': "Costruisce con zelo la tana in riva ai corsi d'acqua,\nlevigando radici e rami con gli affilati incisivi.",
		'de-de': "Emsig durchbeißt es mit seinen scharfen Vorderzähnen\nWurzeln und Äste und baut daraus sein Nest.",
		'pt-br': "Ele monta seu ninho com pilhas de galhos e raízes\nde árvores que cortou com seus incisivos.",
		'ko-kr': "예리한 앞니로 갉아 얻은\n나뭇가지나 뿌리를 쌓아\n물가에 부지런히 보금자리를 만든다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'de-de': "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			'ko-kr': "구르기 태클"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
