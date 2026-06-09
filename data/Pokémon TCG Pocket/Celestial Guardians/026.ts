import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		de: "Arkani",
		'pt-br': "Arcanine",
		ko: "윈디"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [59],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	description: {
		en: "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.",
		fr: "Une vieille estampe montre que les êtres\nhumains étaient fascinés par ses mouvements\nlorsqu'il courait dans les champs.",
		es: "Cuenta un antiguo pergamino que la gente se\nquedaba fascinada al verlo correr por las praderas.",
		it: "Dal disegno su un'antica pergamena si vede come\nle sue corse sui prati incantassero le persone.",
		de: "Eine alte Bildrolle zeigt, dass die Menschen\nvon dem Anblick über Wiesen rennender\nArkani verzaubert waren.",
		'pt-br': "Um antigo pergaminho mostra que pessoas eram\ncativadas por seu movimento enquanto este\nPokémon corria pelas pradarias.",
		ko: "초원을 내달리는 모습은\n사람들의 마음을 사로잡았다고\n옛날 그림에 묘사되어 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fire Mane",
			fr: "Crinière de Feu",
			es: "Crin de Fuego",
			it: "Criniera di Fuoco",
			de: "Flammenmähne",
			'pt-br': "Crina de Fogo",
			ko: "불꽃의갈기"
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