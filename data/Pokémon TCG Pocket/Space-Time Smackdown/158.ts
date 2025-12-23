import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		de: "Venuflibis",
		'pt-br': "Carnivine",
		ko: "무스틈니"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [455],
	hp: 90,
	types: ["Grass"],

	description: {
		en: "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.",
		fr: "Il attire sa proie avec sa salive odorante avant\nde la croquer. Il lui faut une journée pour l'avaler.",
		es: "Atrae a sus presas con saliva de olor dulce y\nlas mastica. Tarda todo un día en comérselas.",
		it: "Attira le prede con il dolce aroma della saliva e poi\nle ingoia. Impiega un giorno per mangiare una preda.",
		de: "Sein süßlich riechender Speichel zieht Beute an,\ndie es frisst. Es braucht einen Tag, sie zu fressen.",
		'pt-br': "Atrai presas com sua saliva doce e depois as mastiga.\nLeva um dia inteiro para comer uma presa.",
		ko: "달콤한 냄새의 타액으로 먹이를\n끌어들여 큰 턱으로 꿀꺽한다.\n하루에 걸쳐 먹이를 먹는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flog",
			fr: "Martinet",
			es: "Azotar",
			it: "Scudiscio",
			de: "Auspeitscher",
			'pt-br': "Fustigar",
			ko: "휩다운"
		},

		damage: "40+",
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 50데미지를 추가한다."
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
