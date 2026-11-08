import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'es-es': "Gardevoir",
		'it-it': "Gardevoir",
		'de-de': "Guardevoir",
		'pt-br': "Gardevoir",
		'ko-kr': "가디안"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",

	dexId: [282],
	hp: 110,
	types: ["Psychic"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Kirlia"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Psy Shadow",
			'fr-fr': "Ombre Psy",
			'es-es': "Psicosombra",
			'it-it': "Psicombra",
			'de-de': "Psischatten",
			'pt-br': "Sombra Psíquica",
			'ko-kr': "트랜스 셰이드"
		},

		effect: {
			'en-us': "Once during your turn, you may take 1 {P} Energy from your Energy Zone and attach it to the {P} Pokémon in the Active Spot.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre zone Énergie et l'attacher au Pokémon {P} sur le Poste Actif.",
			'es-es': "Una vez durante tu turno, puedes unir 1 Energía {P} de tu área de Energía al Pokémon {P} en el Puesto Activo.",
			'it-it': "Una sola volta durante il tuo turno, puoi prendere un'Energia {P} dalla tua Zona Energia e assegnarla al Pokémon {P} in posizione attiva.",
			'de-de': "Einmal während deines Zuges kannst du 1 {P}-Energie aus deinem Energiebereich an dein Aktives {P}-Pokémon anlegen.",
			'pt-br': "Uma vez durante o seu turno, você poderá pegar 1 Energia {P} da sua Zona de Energia e ligá-la ao Pokémon {P} no Campo Ativo.",
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 자신의 에너지존에서 {P}에너지를 1개 내보내 배틀필드의 {P}포켓몬에게 붙인다."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'de-de': "Psychoschuss",
			'pt-br': "Tiro Psíquico",
			'ko-kr': "사이코숏"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "To protect its Trainer, it will expend all its psychic power to create a small black hole.",
		'fr-fr': "Prêt à tout pour protéger son Dresseur,\nil peut aller jusqu'à épuiser sa force\nmentale pour créer un mini trou noir.",
		'es-es': "Para proteger a su Entrenador,\nemplea todo su poder psíquico en\ncrear un pequeño agujero negro.",
		'it-it': "Per proteggere l'Allenatrice o l'Allenatore\ndal pericolo, utilizza tutti i poteri psichici di\ncui dispone per creare un piccolo buco nero.",
		'de-de': "Wenn es seinen Trainer schützen will, nimmt es all\nseine Psycho-Kräfte zusammen, um so ein kleines\nschwarzes Loch zu erzeugen.",
		'pt-br': "Para proteger seu Treinador, gasta todo seu poder\npsíquico para criar um pequeno buraco negro.",
		'ko-kr': "트레이너를 지키기 위해서라면\n사이코 파워를 모두 써서\n작은 블랙홀을 만들어 낸다."
	},

	boosters: ["mewtwo"]
}

export default card
