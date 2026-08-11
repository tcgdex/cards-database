import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'de-de': "Rizeros",
		'pt-br': "Rhydon",
		'ko-kr': "코뿌리"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [112],
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rhyhorn"
	},

	description: {
		'en-us': "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
		'fr-fr': "L'évolution a permis à ce Pokémon de marcher\nsur ses pattes postérieures. Il peut faire des trous\ndans les rochers en utilisant sa corne.",
		'es-es': "Cuando evoluciona, comienza a andar\ncon las patas traseras. Es capaz de\nhoradar rocas con el cuerno que tiene.",
		'it-it': "Dopo l'evoluzione inizia a muoversi sulle zampe\nposteriori. Con il corno può perforare la roccia.",
		'de-de': "Nach seiner Entwicklung geht es aufrecht auf\nseinen Hinterbeinen. Mit seinem Horn kann es\nLöcher in Felsen bohren.",
		'pt-br': "Após evoluir, começa a andar com\nsuas pernas traseiras. Consegue furar\nrochedos com seu chifre.",
		'ko-kr': "진화하여 뒷다리만으로\n서게 되었다. 뿔로 찌르면\n암석에도 구멍이 뚫리고 만다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wrack Down",
			'fr-fr': "Réduire en Poussière",
			'es-es': "Desmoronar",
			'it-it': "Abbattere",
			'de-de': "Niederschleudern",
			'pt-br': "Desmoronar",
			'ko-kr': "두들겨 부수기"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["palkia"]
}

export default card
