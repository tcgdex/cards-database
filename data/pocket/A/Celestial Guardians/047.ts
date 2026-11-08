import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brionne",
		'fr-fr': "Otarlette",
		'es-es': "Brionne",
		'it-it': "Brionne",
		'de-de': "Marikeck",
		'pt-br': "Brionne",
		'ko-kr': "키요공"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [729],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Popplio"
	},

	description: {
		'en-us': "It gets excited when it sees a dance it doesn't know. This hard worker practices diligently until it can learn that dance.",
		'fr-fr': "Il est tout excité quand il est témoin d'une danse\nqu'il ne connaît pas. Il s'entraîne alors comme\nun forcené jusqu'à la maîtriser à la perfection.",
		'es-es': "Se emociona al contemplar una danza que\nno conoce y se esfuerza sobremanera por\naprender todos sus pasos a la perfección.",
		'it-it': "Si emoziona quando assiste a una danza che non conosce ancora\ne si esercita con impegno finché non la impara alla perfezione.",
		'de-de': "Sieht es einen Tanz, den es nicht kennt, wird es ganz\naufgeregt. Dann übt es fleißig, bis es ihn gemeistert hat.",
		'pt-br': "Este Pokémon fica animado ao ver uma dança\nque não conhece. Pratica arduamente e se esforça\nbastante até conseguir aprendê-la.",
		'ko-kr': "모르는 댄스를 보면 흥분한다.\n출 수 있을 때까지 열심히\n연습하는 노력가다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'de-de': "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			'ko-kr': "스플래시"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card