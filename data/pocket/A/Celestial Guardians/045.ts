import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
		'es-es': "Popplio",
		'it-it': "Popplio",
		'de-de': "Robball",
		'pt-br': "Popplio",
		'ko-kr': "누리공"
	},

	illustrator: "Kanami Ogata",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [728],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "The balloons it inflates with its nose grow larger and larger as it practices day by day.",
		'fr-fr': "Grâce à son entraînement quotidien, les ballons\nqu'il gonfle avec son nez sont de plus en plus gros.",
		'es-es': "Gracias al entrenamiento diario al que se somete, es capaz\nde inflar globos cada vez más grandes a través de la nariz.",
		'it-it': "Grazie all'allenamento quotidiano, i palloncini che gonfia\ncon il naso diventano a poco a poco sempre più grandi.",
		'de-de': "Dank seines täglichen Trainings gelingt es ihm,\nmit seiner Nase immer größere Blasen zu erzeugen.",
		'pt-br': "Os balões que cria com seu nariz ficam cada vez\nmaiores à medida que pratica dia após dia.",
		'ko-kr': "코로 부풀리는 벌룬은\n매일 연습을 반복하면서\n조금씩 커진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sing",
			'fr-fr': "Berceuse",
			'es-es': "Canto",
			'it-it': "Canto",
			'de-de': "Gesang",
			'pt-br': "Canção",
			'ko-kr': "노래하기"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			'ko-kr': "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card