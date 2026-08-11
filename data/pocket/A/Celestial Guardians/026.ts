import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'de-de': "Arkani",
		'pt-br': "Arcanine",
		'ko-kr': "윈디"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [59],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Growlithe"
	},

	description: {
		'en-us': "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.",
		'fr-fr': "Une vieille estampe montre que les êtres\nhumains étaient fascinés par ses mouvements\nlorsqu'il courait dans les champs.",
		'es-es': "Cuenta un antiguo pergamino que la gente se\nquedaba fascinada al verlo correr por las praderas.",
		'it-it': "Dal disegno su un'antica pergamena si vede come\nle sue corse sui prati incantassero le persone.",
		'de-de': "Eine alte Bildrolle zeigt, dass die Menschen\nvon dem Anblick über Wiesen rennender\nArkani verzaubert waren.",
		'pt-br': "Um antigo pergaminho mostra que pessoas eram\ncativadas por seu movimento enquanto este\nPokémon corria pelas pradarias.",
		'ko-kr': "초원을 내달리는 모습은\n사람들의 마음을 사로잡았다고\n옛날 그림에 묘사되어 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fire Mane",
			'fr-fr': "Crinière de Feu",
			'es-es': "Crin de Fuego",
			'it-it': "Criniera di Fuoco",
			'de-de': "Flammenmähne",
			'pt-br': "Crina de Fogo",
			'ko-kr': "불꽃의갈기"
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo", "lunala"]
}

export default card