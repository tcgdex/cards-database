import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		de: "Shuppet",
		'pt-br': "Shuppet",
		ko: "어둠대신"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It loves to feed on feelings like envy and malice. Its upright horn catches the emotions of people.",
		fr: "Sa corne capte les émotions des êtres\nhumains. Il adore se nourrir de sentiments\ntels que la jalousie et la rancune.",
		es: "Se alimenta de sentimientos como la envidia y el\nrencor, que capta a través del cuerno de la cabeza.",
		it: "Ama cibarsi di invidia e odio. Il corno ritto sul capo\ngli permette di percepire le emozioni della gente.",
		de: "Es verspeist am liebsten Gefühle wie Neid und Bosheit.\nSein aufrechtes Horn fängt die Emotionen der Menschen ein.",
		'pt-br': "Adora se alimentar de sentimentos como inveja e malícia.\nSeu chifre vertical capta as emoções das pessoas.",
		ko: "원한이나 질투 같은 감정이\n좋아하는 먹이다. 뾰족하게 솟은 뿔이\n인간의 기분을 감지해 낸다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			it: "Fuocofatuo",
			de: "Irrlicht",
			'pt-br': "Fogo Fátuo",
			ko: "도깨비불"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card