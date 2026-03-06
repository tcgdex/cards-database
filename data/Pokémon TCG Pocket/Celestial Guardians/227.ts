import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		de: "Knogga",
		'pt-br': "Marowak",
		ko: "텅구리"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [105],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cubone"
	},

	description: {
		en: "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
		fr: "Il s'est endurci et a évolué depuis qu'il a réussi\nà surmonter sa peine. Il utilise son os en guise\nd'arme et affronte ses ennemis avec bravoure.",
		es: "Ha evolucionado tras fortalecerse y\nsuperar su pena. Ahora lucha con arrojo\nblandiendo su hueso a modo de arma.",
		it: "Si è evoluto dopo essersi temprato e aver\nsuperato il lutto. Usa l'osso come un'arma\ne lotta valorosamente contro i nemici.",
		de: "Als es seine Trauer überwand, entwickelte es sich\nund wurde stärker. Mit seinem Knochen als Waffe\nstellt sich Knogga mutig seinen Feinden.",
		'pt-br': "Lidou com sua tristeza para evoluir um\ncorpo novo e forte. Enfrenta seus oponentes\ncom bravura, empunhando um osso como arma.",
		ko: "슬픔을 극복하고 늠름하게\n진화했다. 뼈를 무기 삼아\n용감하게 적과 맞서 싸운다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bone Beatdown",
			fr: "Dérouillée d'Os",
			es: "Derribo Óseo",
			it: "Colpo d'Osso",
			de: "Knochenprügel",
			'pt-br': "Surra de Osso",
			ko: "뼈때리기"
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card