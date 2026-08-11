import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon",
		'es-es': "Floragato",
		'it-it': "Floragato",
		'de-de': "Feliospa",
		'pt-br': "Floragato",
		'ko-kr': "나로테"
	},

	illustrator: "mashu",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [907],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Sprigatito"
	},

	description: {
		'en-us': "Floragato deftly wields the vine hidden beneath its long fur, slamming the hard flower bud against its opponents.",
		'fr-fr': "Il manie avec habileté la liane dissimulée\nsous ses longs poils et frappe ses adversaires\navec le bourgeon dur situé à son extrémité.",
		'es-es': "Maneja diestramente la vid oculta bajo su largo pelaje y propina\nlatigazos al enemigo con el capullo endurecido de la punta.",
		'it-it': "Muove con agilità la liana nascosta\nsotto il lungo pelo e sferza il nemico\ncon il duro bocciolo sulla punta.",
		'de-de': "Es lenkt geschickt die Ranke, die es unter\nseinem langen Fell verbirgt, und schleudert\ndie harte Knospe an ihrem Ende auf Gegner.",
		'pt-br': "Floragato empunha com maestria o cipó escondido\nentre seus pelos longos. Golpeia seus oponentes\ncom o botão de flor rígido.",
		'ko-kr': "긴 털 아래 숨긴 덩굴을\n능숙하게 다뤄서\n단단한 꽃봉오리로 상대를 가격한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'de-de': "Schlitzer",
			'pt-br': "Talho",
			'ko-kr': "베어가르기"
		},

		damage: 40,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card