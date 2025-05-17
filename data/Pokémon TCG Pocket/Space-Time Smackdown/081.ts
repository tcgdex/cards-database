import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		de: "Rizeros",
		'pt-br': "Rhydon",
		ko: "코뿌리"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rhyhorn"
	},

	description: {
		en: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
		fr: "L'évolution a permis à ce Pokémon de marcher\nsur ses pattes postérieures. Il peut faire des trous\ndans les rochers en utilisant sa corne.",
		es: "Cuando evoluciona, comienza a andar\ncon las patas traseras. Es capaz de\nhoradar rocas con el cuerno que tiene.",
		it: "Dopo l'evoluzione inizia a muoversi sulle zampe\nposteriori. Con il corno può perforare la roccia.",
		de: "Nach seiner Entwicklung geht es aufrecht auf\nseinen Hinterbeinen. Mit seinem Horn kann es\nLöcher in Felsen bohren.",
		'pt-br': "Após evoluir, começa a andar com\nsuas pernas traseiras. Consegue furar\nrochedos com seu chifre.",
		ko: "진화하여 뒷다리만으로\n서게 되었다. 뿔로 찌르면\n암석에도 구멍이 뚫리고 만다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière",
			es: "Desmoronar",
			it: "Abbattere",
			de: "Niederschleudern",
			'pt-br': "Desmoronar",
			ko: "두들겨 부수기"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
