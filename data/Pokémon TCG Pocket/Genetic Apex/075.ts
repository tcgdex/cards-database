import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		de: "Starmie",
		'pt-br': "Starmie",
		ko: "아쿠스타"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Staryu"
	},


	attacks: [{
		cost: ["Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			de: "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			ko: "스플래시"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "Two Diamond",

	description: {
		en: "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.",
		fr: "S'il déchaîne son pouvoir psychique puissant,\nson organe appelé \" cœur \" se met à briller\nde sept couleurs.",
		es: "Su órgano central, conocido como núcleo, brilla\ncon los colores del arcoíris cuando se dispone\na liberar sus potentes poderes psíquicos.",
		it: "Quando scatena i suoi poteri psichici, l'organo\ncentrale, detto nucleo, brilla di sette colori diversi.",
		de: "Das als Kern bezeichnete Organ dieses Pokémon\nerstrahlt in den sieben Farben des Regenbogens,\nwenn Starmie mächtige Psycho-Kräfte entfesselt.",
		'pt-br': "Este Pokémon tem um órgão que é conhecido como\nseu núcleo. Este órgão brilha em sete cores diferentes\nquando Starmie libera seus poderes psíquicos intensos.",
		ko: "강렬한 사이코 파워를 발산할 때\n코어라고 불리는 기관이\n일곱 색깔로 빛난다."
	}
}

export default card
