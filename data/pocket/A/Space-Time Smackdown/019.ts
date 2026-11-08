import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'it-it': "Carnivine",
		'de-de': "Venuflibis",
		'pt-br': "Carnivine",
		'ko-kr': "무스틈니"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [455],
	hp: 90,
	types: ["Grass"],

	description: {
		'en-us': "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.",
		'fr-fr': "Il attire sa proie avec sa salive odorante avant\nde la croquer. Il lui faut une journée pour l'avaler.",
		'es-es': "Atrae a sus presas con saliva de olor dulce y\nlas mastica. Tarda todo un día en comérselas.",
		'it-it': "Attira le prede con il dolce aroma della saliva e poi\nle ingoia. Impiega un giorno per mangiare una preda.",
		'de-de': "Sein süßlich riechender Speichel zieht Beute an,\ndie es frisst. Es braucht einen Tag, sie zu fressen.",
		'pt-br': "Atrai presas com sua saliva doce e depois as mastiga.\nLeva um dia inteiro para comer uma presa.",
		'ko-kr': "달콤한 냄새의 타액으로 먹이를\n끌어들여 큰 턱으로 꿀꺽한다.\n하루에 걸쳐 먹이를 먹는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flog",
			'fr-fr': "Martinet",
			'es-es': "Azotar",
			'it-it': "Scudiscio",
			'de-de': "Auspeitscher",
			'pt-br': "Fustigar",
			'ko-kr': "휩다운"
		},

		damage: "40+",
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 50데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
