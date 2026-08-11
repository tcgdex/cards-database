import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'de-de': "Bidiza",
		'pt-br': "Bidoof",
		'ko-kr': "비버니"
	},

	illustrator: "Shinya Komatsu",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [399],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
		'fr-fr': "Rien ne peut perturber ses nerfs d'acier.\nIl est plus agile et énergique qu'il n'y paraît.",
		'es-es': "Tiene nervios de acero y nada puede perturbarlo.\nEs más ágil y activo de lo que aparenta.",
		'it-it': "Ha i nervi d'acciaio e niente può turbarlo.\nÈ più agile e attivo di quanto sembri.",
		'de-de': "Es hat Nerven wie Drahtseile, nichts kann es erschüttern.\nEs ist agiler und aktiver, als es scheint.",
		'pt-br': "Com nervos de aço, nada pode perturbá-lo.\nÉ mais ágil e ativo do que parece.",
		'ko-kr': "어떤 것에도 동요하지 않는\n대담한 신경의 소유자다.\n보기보다는 기민하게 활동한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Super Fang",
			'fr-fr': "Croc Fatal",
			'es-es': "Superdiente",
			'it-it': "Superzanna",
			'de-de': "Superzahn",
			'pt-br': "Superpresa",
			'ko-kr': "분노의앞니"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Halve your opponent's Active Pokémon's remaining HP, rounded down.",
			'fr-fr': "Réduisez de moitié les PV restants du Pokémon Actif de votre adversaire en arrondissant au nombre inférieur.",
			'es-es': "Reduce a la mitad los PS restantes del Pokémon Activo de tu rival redondeando hacia abajo.",
			'it-it': "Dimezza i PS rimanenti del Pokémon attivo del tuo avversario, arrotondandoli per difetto.",
			'de-de': "Halbiere die verbleibenden KP des Aktiven Pokémon deines Gegners (abgerundet).",
			'pt-br': "Reduza o PS restante do Pokémon Ativo do seu oponente pela metade, arrendondando para baixo.",
			'ko-kr': "상대 배틀 포켓몬의 남은 HP를 절반(일의 자리는 버림)으로 만든다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
