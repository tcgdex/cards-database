import { Card } from "models/database/card"
import Set from "../Genetic Apex"

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

	illustrator: "kodama",
	category: "Pokemon",

	dexId: [73],
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Tentacool"
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Poison Tentacles",
			'fr-fr': "Tentacules Empoisonnés",
			'es-es': "Tentáculos Venenosos",
			'it-it': "Tentacoli Velenosi",
			'de-de': "Giftige Tentakel",
			'pt-br': "Tentáculos Venenosos",
			'ko-kr': "독촉수"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		'en-us': "When the red orbs on Tentacruel's head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
		'fr-fr': "Il faut faire attention lorsque les globes rouges\nsur sa tête se mettent à briller intensément,\ncar c'est qu'il s'apprête à émettre des ultrasons.",
		'es-es': "Si las esferas rojas que tiene a ambos lados\nde la cabeza brillan con intensidad, indica que\nestá a punto de lanzar ondas ultrasónicas.",
		'it-it': "Meglio fare attenzione quando le sfere rosse\nche ha sulla testa brillano intensamente, perché\nvuol dire che sta per emettere ultrasuoni.",
		'de-de': "Leuchten die roten Kugeln auf seinem Kopf stark\nauf, ist Vorsicht geboten, da es kurz danach\nUltraschallwellen ausstoßen wird.",
		'pt-br': "Quando o orbe vermelho na cabeça de Tantacruel\nbrilha intensamente, cuidado: este Pokémon está\nprestes a disparar uma rajada de ondas ultrassônicas.",
		'ko-kr': "머리의 빨간 구슬이\n밝게 빛나면 주의가 필요하다.\n초음파를 발산하려는 전조다."
	},

	boosters: ["mewtwo"]
}

export default card
