import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Popplio",
		fr: "Otaquin",
		es: "Popplio",
		it: "Popplio",
		de: "Robball",
		'pt-br': "Popplio",
		ko: "누리공"
	},

	illustrator: "Kanami Ogata",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [728],
	hp: 60,
	types: ["Water"],

	description: {
		en: "The balloons it inflates with its nose grow larger and larger as it practices day by day.",
		fr: "Grâce à son entraînement quotidien, les ballons\nqu'il gonfle avec son nez sont de plus en plus gros.",
		es: "Gracias al entrenamiento diario al que se somete, es capaz\nde inflar globos cada vez más grandes a través de la nariz.",
		it: "Grazie all'allenamento quotidiano, i palloncini che gonfia\ncon il naso diventano a poco a poco sempre più grandi.",
		de: "Dank seines täglichen Trainings gelingt es ihm,\nmit seiner Nase immer größere Blasen zu erzeugen.",
		'pt-br': "Os balões que cria com seu nariz ficam cada vez\nmaiores à medida que pratica dia após dia.",
		ko: "코로 부풀리는 벌룬은\n매일 연습을 반복하면서\n조금씩 커진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sing",
			fr: "Berceuse",
			es: "Canto",
			it: "Canto",
			de: "Gesang",
			'pt-br': "Canção",
			ko: "노래하기"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
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