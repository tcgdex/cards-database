import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'de-de': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'ko-kr': "폴리곤Z"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [474],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon2"
	},

	description: {
		'en-us': "Porygon-Z had a program installed to allow it to move between dimensions, but the program also caused instability in Porygon-Z's behavior.",
		'fr-fr': "Depuis qu'on lui a ajouté un programme\npermettant de voyager entre les dimensions,\nson comportement est devenu instable.",
		'es-es': "Se le instaló un software que le permite entrar\ny salir de otras dimensiones, pero que provocó\nque su comportamiento se volviese inestable.",
		'it-it': "Da quando gli è stato installato un programma che gli permette\ndi viaggiare in altre dimensioni, mostra un comportamento instabile.",
		'de-de': "Seit eine neue Software installiert wurde, die es\nzu interdimensionalen Reisen befähigen sollte,\nwurde sein Verhalten instabil.",
		'pt-br': "Porygon-Z tem um programa instalado permitindo\nque se desloque entre dimensões. Porém, este programa\ncausou uma certa instabilidade em seu comportamento.",
		'ko-kr': "다른 공간에 드나들 수 있는\n프로그램을 추가한 결과\n움직임이 불안정해졌다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Buggy Beam",
			'fr-fr': "Rayon Bogué",
			'es-es': "Rayo Errático",
			'it-it': "Raggio Glitch",
			'de-de': "Glitch-Strahl",
			'pt-br': "Raio Bugado",
			'ko-kr': "버그빔"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Change the type of the next Energy that will be generated for your opponent to 1 of the following at random: {G}, {R}, {W}, {L}, {P}, {F}, {D}, or {M}.",
			'fr-fr': "Le type de la prochaine Énergie générée pour votre adversaire est remplacé au hasard par l'un des suivants : , , , , , , , ou .",
			'es-es': "Cambia el tipo de la próxima Energía que se generará para tu rival a 1 de las siguientes al azar: , , , , , , o .",
			'it-it': "Cambia il tipo della prossima Energia generata per il tuo avversario con uno a caso fra quelli elencati di seguito: , , , , , , o .",
			'de-de': "Ändere den Typ der Energie, die für deinen Gegner als Nächstes generiert wird, zufällig zu 1 der folgenden: , , , , , , oder .",
			'pt-br': "Mude o tipo da próxima Energia que será gerada para seu oponente para 1 das seguintes Energias aleatoriamente: , , , , , , ou .",
			'ko-kr': "상대의 다음에 발생하는 에너지의 타입을 중에서 1가지로 랜덤하게 바꾼다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card
