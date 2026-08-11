import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'de-de': "Roselia",
		'pt-br': "Roselia",
		'ko-kr': "로젤리아"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [315],
	hp: 70,
	types: ["Grass"],

	description: {
		'en-us': "Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is.",
		'fr-fr': "Ses fleurs dégagent un parfum relaxant. Plus cet\narôme est fort, meilleure est la santé de Rosélia.",
		'es-es': "Las flores que tiene emanan un aroma relajante.\nCuanto más intenso, mejor es su estado de salud.",
		'it-it': "Dai suoi fiori si diffonde una fragranza rilassante. Più\nè intenso il suo profumo, più il Pokémon è in salute.",
		'de-de': "Seine Blüten verströmen einen entspannenden Duft.\nJe stärker dieser Duft ist, desto gesünder ist Roselia.",
		'pt-br': "As suas flores exalam uma fragrância relaxante.\nQuanto mais forte for o seu aroma,\nmais saudável será Roselia.",
		'ko-kr': "꽃향기를 맡으면 기분이\n편안해진다. 향이 강하면\n건강한 로젤리아라는 뜻이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sting",
			'fr-fr': "Dard",
			'es-es': "Aguijonazo",
			'it-it': "Puntura",
			'de-de': "Einstich",
			'pt-br': "Ferroada",
			'ko-kr': "따끔따끔찌르기"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
