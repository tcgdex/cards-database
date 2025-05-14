import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		es: "Gardevoir",
		it: "Gardevoir",
		de: "Guardevoir",
		'pt-br': "Gardevoir",
		ko: "가디안"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage2",
	evolveFrom: {
		en: "Kirlia"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Psy Shadow",
			fr: "Ombre Psy",
			es: "Psicosombra",
			it: "Psicombra",
			de: "Psischatten",
			'pt-br': "Sombra Psíquica",
			ko: "트랜스 셰이드"
		},

		effect: {
			en: "Once during your turn, you may take 1 {P} Energy from your Energy Zone and attach it to the {P} Pokémon in the Active Spot.",
			fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre zone Énergie et l'attacher au Pokémon {P} sur le Poste Actif.",
			es: "Una vez durante tu turno, puedes unir 1 Energía {P} de tu área de Energía al Pokémon {P} en el Puesto Activo.",
			it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {P} dalla tua Zona Energia e assegnarla al Pokémon {P} in posizione attiva.",
			de: "Einmal während deines Zuges kannst du 1 P-Energie aus deinem Energiebereich an dein Aktives {P}-Pokémon anlegen.",
			'pt-br': "Uma vez durante o seu turno, você poderá pegar 1 Energia {P} da sua Zona de Energia e ligá-la ao Pokémon {P} no Campo Ativo.",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 에너지존에서 P에너지를 1개 내보내 배틀필드의 {P}포켓몬에게 붙인다."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			de: "Psychoschuss",
			'pt-br': "Tiro Psíquico",
			ko: "사이코숏"
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
		en: "To protect its Trainer, it will expend all its psychic power to create a small black hole.",
		fr: "Prêt à tout pour protéger son Dresseur,\nil peut aller jusqu'à épuiser sa force\nmentale pour créer un mini trou noir.",
		es: "Para proteger a su Entrenador,\nemplea todo su poder psíquico en\ncrear un pequeño agujero negro.",
		it: "Per proteggere l'Allenatrice o l'Allenatore\ndal pericolo, utilizza tutti i poteri psichici di\ncui dispone per creare un piccolo buco nero.",
		de: "Wenn es seinen Trainer schützen will, nimmt es all\nseine Psycho-Kräfte zusammen, um so ein kleines\nschwarzes Loch zu erzeugen.",
		'pt-br': "Para proteger seu Treinador, gasta todo seu poder\npsíquico para criar um pequeno buraco negro.",
		ko: "트레이너를 지키기 위해서라면\n사이코 파워를 모두 써서\n작은 블랙홀을 만들어 낸다."
	}
}

export default card
