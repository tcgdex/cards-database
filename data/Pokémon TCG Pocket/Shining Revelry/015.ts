import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		es: "Tentacruel",
		it: "Tentacruel",
		de: "Tentoxa",
		'pt-br': "Tentacruel",
		ko: "독파리"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Tentacool"
	},

	description: {
		en: "When the red orbs on Tentacruel's head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
		fr: "Il faut faire attention lorsque les globes rouges\nsur sa tête se mettent à briller intensément,\ncar c'est qu'il s'apprête à émettre des ultrasons.",
		es: "Si las esferas rojas que tiene a ambos lados\nde la cabeza brillan con intensidad, indica que\nestá a punto de lanzar ondas ultrasónicas.",
		it: "Meglio fare attenzione quando le sfere rosse\nche ha sulla testa brillano intensamente, perché\nvuol dire che sta per emettere ultrasuoni.",
		de: "Leuchten die roten Kugeln auf seinem Kopf stark\nauf, ist Vorsicht geboten, da es kurz danach\nUltraschallwellen ausstoßen wird.",
		'pt-br': "Quando o orbe vermelho na cabeça de Tantacruel\nbrilha intensamente, cuidado: este Pokémon está\nprestes a disparar uma rajada de ondas ultrassônicas.",
		ko: "머리의 빨간 구슬이\n밝게 빛나면 주의가 필요하다.\n초음파를 발산하려는 전조다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			de: "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			ko: "스플래시"
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