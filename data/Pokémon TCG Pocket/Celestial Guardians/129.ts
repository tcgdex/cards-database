import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		de: "Eneco",
		'pt-br': "Skitty",
		ko: "에나비"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It can't stop itself from chasing moving things, and it runs in a circle, chasing its own tail.",
		fr: "Il poursuit tout ce qui bouge. On le voit parfois\ncourir en cercle, chassant sa propre queue.",
		es: "No puede evitar ir tras las cosas que se mueven.\nHasta corre en círculos persiguiéndose la cola.",
		it: "Non riesce a evitare di inseguire tutto ciò che si\nmuove e corre in tondo a caccia della propria coda.",
		de: "Es muss Dinge, die sich bewegen, einfach jagen.\nEs rennt oft im Kreis und jagt seinen eigenen Schweif.",
		'pt-br': "Não consegue parar de perseguir tudo que se move.\nCorre em círculos atrás de sua própria cauda.",
		ko: "움직이는 것을 무심코 쫓아간다.\n자신의 꼬리를 쫓아서\n똑같은 장소를 빙글빙글 돈다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card