import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Bellossom",
		fr: "Joliflor",
		es: "Bellossom",
		it: "Bellossom",
		de: "Blubella",
		'pt-br': "Bellossom",
		ko: "아르코"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [182],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Gloom"
	},

	description: {
		en: "Plentiful in the tropics. When it dances, its petals rub together and make a pleasant ringing sound.",
		fr: "Ce Pokémon vit en nombre dans les tropiques.\nQuand il danse, ses pétales frottent les uns\ncontre les autres et émettent un son mélodieux.",
		es: "Abunda en los trópicos. Al bailar, sus pétalos\nse rozan y emiten un agradable sonido.",
		it: "Molto comune ai tropici. Quando danza, i petali\nsfregano uno contro l'altro producendo un piacevole suono.",
		de: "Es lebt in den Tropen. Beim Tanzen reiben seine Blüten\naneinander und erzeugen ein wohliges Geräusch.",
		'pt-br': "Recorrente nos trópicos. Quando dança,\nsuas pétalas se esfregam umas nas outras\ne emitem um som agradável.",
		ko: "남국에 널리 분포하여 서식하고 있다.\n춤출 때 꽃잎끼리 서로 부딪혀서\n기분 좋은 소리가 울려 퍼진다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			it: "Passofoglia",
			de: "Blattschritt",
			'pt-br': "Passo de Folha",
			ko: "리프스텝"
		},

		damage: 80,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
