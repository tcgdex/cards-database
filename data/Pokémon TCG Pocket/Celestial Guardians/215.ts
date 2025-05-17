import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Squirtle",
		fr: "Carapuce",
		es: "Squirtle",
		it: "Squirtle",
		de: "Schiggy",
		'pt-br': "Squirtle",
		ko: "꼬부기"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
		fr: "Quand il rentre son cou dans sa carapace,\nil peut projeter de l'eau à haute pression.",
		es: "Cuando retrae su largo cuello en el caparazón,\ndispara agua a una presión increíble.",
		it: "Quando ritrae il lungo collo dentro la\ncorazza sputa un vigoroso getto d'acqua.",
		de: "Zieht es seinen langen Hals in seinen Panzer\nzurück, verspritzt es Wasser mit unbändiger Kraft.",
		'pt-br': "Ao retrair o pescoço longo para dentro\ndo seu casco, lança um jato de água\nmuito poderoso.",
		ko: "기다란 목을 등껍질 속에\n감춘 다음 기세 좋게\n물대포를 발사한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			de: "Aquaknarre",
			'pt-br': "Revólver d'Água",
			ko: "물대포"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card