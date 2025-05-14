import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Floragato",
		fr: "Matourgeon",
		es: "Floragato",
		it: "Floragato",
		de: "Feliospa",
		'pt-br': "Floragato",
		ko: "나로테"
	},

	illustrator: "mashu",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Sprigatito"
	},

	description: {
		en: "Floragato deftly wields the vine hidden beneath its long fur, slamming the hard flower bud against its opponents.",
		fr: "Il manie avec habileté la liane dissimulée\nsous ses longs poils et frappe ses adversaires\navec le bourgeon dur situé à son extrémité.",
		es: "Maneja diestramente la vid oculta bajo su largo pelaje y propina\nlatigazos al enemigo con el capullo endurecido de la punta.",
		it: "Muove con agilità la liana nascosta\nsotto il lungo pelo e sferza il nemico\ncon il duro bocciolo sulla punta.",
		de: "Es lenkt geschickt die Ranke, die es unter\nseinem langen Fell verbirgt, und schleudert\ndie harte Knospe an ihrem Ende auf Gegner.",
		'pt-br': "Floragato empunha com maestria o cipó escondido\nentre seus pelos longos. Golpeia seus oponentes\ncom o botão de flor rígido.",
		ko: "긴 털 아래 숨긴 덩굴을\n능숙하게 다뤄서\n단단한 꽃봉오리로 상대를 가격한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			de: "Schlitzer",
			'pt-br': "Talho",
			ko: "베어가르기"
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