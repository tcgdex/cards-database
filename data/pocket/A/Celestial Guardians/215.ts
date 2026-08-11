import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'es-es': "Squirtle",
		'it-it': "Squirtle",
		'de-de': "Schiggy",
		'pt-br': "Squirtle",
		'ko-kr': "꼬부기"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [7],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
		'fr-fr': "Quand il rentre son cou dans sa carapace,\nil peut projeter de l'eau à haute pression.",
		'es-es': "Cuando retrae su largo cuello en el caparazón,\ndispara agua a una presión increíble.",
		'it-it': "Quando ritrae il lungo collo dentro la\ncorazza sputa un vigoroso getto d'acqua.",
		'de-de': "Zieht es seinen langen Hals in seinen Panzer\nzurück, verspritzt es Wasser mit unbändiger Kraft.",
		'pt-br': "Ao retrair o pescoço longo para dentro\ndo seu casco, lança um jato de água\nmuito poderoso.",
		'ko-kr': "기다란 목을 등껍질 속에\n감춘 다음 기세 좋게\n물대포를 발사한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'de-de': "Aquaknarre",
			'pt-br': "Revólver d'Água",
			'ko-kr': "물대포"
		},

		damage: 20,
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