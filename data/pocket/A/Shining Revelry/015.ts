import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'es-es': "Tentacruel",
		'it-it': "Tentacruel",
		'de-de': "Tentoxa",
		'pt-br': "Tentacruel",
		'ko-kr': "독파리"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [73],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Tentacool"
	},

	description: {
		'en-us': "When the red orbs on Tentacruel's head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
		'fr-fr': "Il faut faire attention lorsque les globes rouges\nsur sa tête se mettent à briller intensément,\ncar c'est qu'il s'apprête à émettre des ultrasons.",
		'es-es': "Si las esferas rojas que tiene a ambos lados\nde la cabeza brillan con intensidad, indica que\nestá a punto de lanzar ondas ultrasónicas.",
		'it-it': "Meglio fare attenzione quando le sfere rosse\nche ha sulla testa brillano intensamente, perché\nvuol dire che sta per emettere ultrasuoni.",
		'de-de': "Leuchten die roten Kugeln auf seinem Kopf stark\nauf, ist Vorsicht geboten, da es kurz danach\nUltraschallwellen ausstoßen wird.",
		'pt-br': "Quando o orbe vermelho na cabeça de Tantacruel\nbrilha intensamente, cuidado: este Pokémon está\nprestes a disparar uma rajada de ondas ultrassônicas.",
		'ko-kr': "머리의 빨간 구슬이\n밝게 빛나면 주의가 필요하다.\n초음파를 발산하려는 전조다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'de-de': "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			'ko-kr': "스플래시"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card