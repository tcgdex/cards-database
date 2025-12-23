import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Clobbopus",
		fr: "Poulpaf",
		es: "Clobbopus",
		it: "Clobbopus",
		de: "Klopptopus",
		'pt-br': "Clobbopus",
		ko: "때때무노"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",

	dexId: [852],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			es: "Puño con Nudillos",
			it: "Noccapugno",
			de: "Knöchelhieb",
			'pt-br': "Soco com Punho",
			ko: "꿀밤"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It's very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.",
		fr: "Il se rend sur la terre ferme pour se nourrir.\nTrès curieux, son premier réflexe est de frapper\ntout ce qu'il voit avec ses tentacules.",
		es: "Emerge a tierra firme en busca de alimento. Su\nextrema curiosidad lo induce a golpear con los\ntentáculos todo lo que entra en su campo visual.",
		it: "Si spinge sulla terraferma in cerca di cibo.\nÈ molto curioso e colpisce con i tentacoli\ntutto quello che entra nel suo campo visivo.",
		de: "Zur Futtersuche kommt es an Land. Es ist sehr\nneugierig, weshalb es alles, was es sieht,\nzunächst einmal mit seinen Tentakeln haut.",
		'pt-br': "Este Pokémon é muito curioso, mas seu método de\ninvestigar as coisas é socando-as com seus tentáculos.\nSó vem para a terra firme à procura de comida.",
		ko: "먹이를 찾아 지상으로 올라온다.\n호기심이 왕성해서 눈에 들어오는 것은\n일단 촉수로 때리고 본다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
