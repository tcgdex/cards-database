import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanchd'Alola",
		'es-es': "Gravelerde Alola",
		'it-it': "Gravelerdi Alola",
		'de-de': "Alola-Georok",
		'pt-br': "Gravelerde Alola",
		'ko-kr': "알로라데구리"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [75],
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Alolan Geodude"
	},

	description: {
		'en-us': "When two Graveler fight each other, it fills the\nsurroundings with flashes of light and sound.\nPeople call it the “fireworks of the earth.”",
		'fr-fr': "Quand ils combattent entre eux, l'air est saturé\nd'éclairs et de détonations. Les gens du coin les\nsurnomment \" les feux d'artifice des collines \".",
		'es-es': "Cuando dos Graveler pelean entre ellos, el aire\nse llena de destellos y estallidos. Los lugareños\nlo suelen comparar con fuegos artificiales.",
		'it-it': "Quando i Graveler lottano fra di loro, provocano lampi e botti.\nGli abitanti di Alola li chiamano fuochi artificiali di terra.",
		'de-de': "Streiten sie sich untereinander, erzeugen sie ein lautes\nKnallen und grelles Leuchten, das von Einheimischen\n\"Felsenfeuerwerk\" genannt wird.",
		'pt-br': "Quando dois Graveler brigam, enchem o ambiente\nde clarões e estalos. São chamados de fogos\nde artifício terrestres.",
		'ko-kr': "데구리끼리 싸우면 주변에\n빛과 폭음이 난다. 그 지방 사람은\n육지 불꽃놀이라고 부른다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'de-de': "Schwerer Einschlag",
			'pt-br': "Impacto Pesado",
			'ko-kr': "헤비임팩트"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo"]
}

export default card
