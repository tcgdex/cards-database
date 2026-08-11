import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'de-de': "Magmar",
		'pt-br': "Magmar",
		'ko-kr': "마그마"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [126],
	hp: 80,
	types: ["Fire"],

	description: {
		'en-us': "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
		'fr-fr': "Il achève ses proies avec ses flammes, mais\nil lui arrive de les calciner accidentellement,\nà son plus grand regret.",
		'es-es': "Abate a sus presas con las llamas\nque genera y con frecuencia acaba\nreduciéndolas a carbonilla por accidente.",
		'it-it': "Abbatte le sue prede con le fiamme, ma\nfinisce per carbonizzarle accidentalmente,\ncon suo grande rammarico.",
		'de-de': "Magmar erlegt seine Beute mit Feuer. Manchmal\nröstet es diese zu seinem Bedauern so stark,\ndass sie versehentlich verkohlt.",
		'pt-br': "Magmar incendeia suas presas, mas sempre se\narrepende ao perceber que as reduziu a cinzas.",
		'ko-kr': "불꽃으로 먹이를 꼼짝 못 하게 한다.\n무의식중에 너무 오래 익혀서\n까맣게 태우고는 후회한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Stoke",
			'fr-fr': "Attisement",
			'es-es': "Atizador",
			'it-it': "Attizzatoio",
			'de-de': "Anheizen",
			'pt-br': "Carregar",
			'ko-kr': "타오르기"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Take a {R} Energy from your Energy Zone and attach it to this Pokémon.",
			'fr-fr': "Prenez une Énergie {R} de votre zone Énergie et attachez-la à ce Pokémon.",
			'es-es': "Une 1 Energía {R} de tu área de Energía a este Pokémon.",
			'it-it': "Prendi un'Energia {R} dalla tua Zona Energia e assegnala a questo Pokémon.",
			'de-de': "Lege 1 {R}-Energie aus deinem Energiebereich an dieses Pokémon an.",
			'pt-br': "Pegue 1 Energia {R} da sua Zona de Energia e ligue-a a este Pokémon.",
			'ko-kr': "자신의 에너지존에서 {R}에너지를 1개 내보내 이 포켓몬에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card
