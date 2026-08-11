import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hakamo-o",
		'fr-fr': "Écaïd",
		'es-es': "Hakamo-o",
		'it-it': "Hakamo-o",
		'de-de': "Mediras",
		'pt-br': "Hakamo-o",
		'ko-kr': "짜랑고우"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [783],
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Jangmo-o"
	},

	description: {
		'en-us': "The scaleless, scarred parts of its body are signs of its strength. It shows them off to defeated opponents.",
		'fr-fr': "Ses écailles arrachées et son corps couvert de\ncicatrices sont la preuve de sa puissance. Il les\nmontre à son adversaire vaincu en se pavanant.",
		'es-es': "Como prueba de su fuerza, muestra orgulloso a quienes\nvence las cicatrices de su cuerpo donde ya no tiene escamas.",
		'it-it': "Come prova della sua forza, mostra orgoglioso all'avversario\nsconfitto le ferite sul suo corpo e le squame mancanti.",
		'de-de': "Für sie sind zerschmetterte Schuppen und Narben\nTrophäen, die sie besiegten Gegnern nach dem\nKampf voller Stolz zeigen.",
		'pt-br': "As partes cicatrizadas e sem escamas de seu corpo\nsão sinais de sua força. Exibe-as aos seus\noponentes derrotados.",
		'ko-kr': "비늘이 떨어진 상처투성이인\n몸은 강자라는 증표다.\n상대를 쓰러뜨린 후 상처를 보여준다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'it-it': "Dragartigli",
			'de-de': "Drachenklaue",
			'pt-br': "Garra de Dragão",
			'ko-kr': "드래곤클로"
		},

		damage: 60,
		cost: ["Lightning", "Fighting"]
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card
