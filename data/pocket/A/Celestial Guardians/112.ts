import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'de-de': "Absol",
		'pt-br': "Absol",
		'ko-kr': "앱솔"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [359],
	hp: 80,
	types: ["Darkness"],

	description: {
		'en-us': "Swift as the wind, Absol races through fields and mountains. Its curved, bow-like horn is acutely sensitive to the warning signs of natural disasters.",
		'fr-fr': "Il court par monts et par vaux, rapide comme\nle vent. Sa corne arquée lui permet de percevoir\nles signes avant-coureurs des cataclysmes.",
		'es-es': "Corre por montañas y prados a la velocidad del\nviento. Su cuerno curvado tiene tal sensibilidad\nque puede predecir catástrofes naturales.",
		'it-it': "Corre veloce come il vento attraverso colline\ne campi. Il suo corno ricurvo è in grado di\nprevedere con precisione le calamità naturali.",
		'de-de': "Schnell wie der Wind rauscht es über Felder und Berge.\nSein gebogenes Horn ist sehr sensibel gegenüber\nherannahenden Naturkatastrophen.",
		'pt-br': "Absol dispara por campos e montanhas, rápido\ncomo o vento. Seu chifre arqueado é altamente sensível\naos sinais de desastres naturais.",
		'ko-kr': "바람처럼 산과 들을 달려나간다.\n초승달 모양의 뿔은 자연재해의\n징조를 민감하게 감지한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Unseen Claw",
			'fr-fr': "Griffe Invisible",
			'es-es': "Garra Oculta",
			'it-it': "Artigli Invisibili",
			'de-de': "Klammheimliche Klaue",
			'pt-br': "Garra Despercebida",
			'ko-kr': "어새신클로"
		},

		damage: "20+",
		cost: ["Darkness", "Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté\npar un État Spécial, cette attaque inflige 60 dégâts\nsupplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 60 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 60 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬이 특수 상태라면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
