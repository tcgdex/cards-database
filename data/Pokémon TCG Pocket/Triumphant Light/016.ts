import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Barboach",
		fr: "Barloche",
		es: "Barboach",
		it: "Barboach",
		de: "Schmerbe",
		'pt-br': "Barboach",
		ko: "미꾸리"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "Its two whiskers provide a sensitive radar. Even in muddy waters, it can detect its prey's location.",
		fr: "Il se sert de ses barbillons comme d'un radar\nultrasophistiqué. Ils lui permettent de détecter\nses proies même dans l'eau boueuse.",
		es: "Sus bigotes son muy sensibles y le sirven de\nradar. Puede detectar la posición de su presa\nincluso en el agua turbia de los lodazales.",
		it: "I suoi baffi sono un radar sensibilissimo in grado di\nindividuare la preda persino nelle acque più torbide.",
		de: "Seine zwei Barteln dienen ihm als empfindliches\nRadarsystem. Selbst in schlammigem Wasser kann\nes so die Position seiner Beute ausmachen.",
		'pt-br': "Seus dois bigodes fornecem um radar sensível.\nPode localizar as suas presas até mesmo\nem águas lamacentas.",
		ko: "2개의 수염은 민감한 레이더이다.\n진흙으로 탁해진 물속에서도\n먹이의 위치를 감지한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			de: "Lehmschelle",
			'pt-br': "Tapa de Lama",
			ko: "진흙뿌리기"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
