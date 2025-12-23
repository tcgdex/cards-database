import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		it: "Mawile",
		de: "Flunkifer",
		'pt-br': "Mawile",
		ko: "입치트"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [303],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Crunch",
			fr: "Mâchouille",
			es: "Triturar",
			it: "Sgranocchio",
			de: "Knirscher",
			'pt-br': "Mastigada",
			ko: "깨물어부수기"
		},

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It uses its docile-looking face to lull foes into complacency, then bites with its huge, relentless jaws.",
		fr: "Trompés par son visage innocent, ses ennemis se font happer\npar ses énormes mâchoires et ne peuvent plus s'échapper.",
		es: "Con su cara inocente hace que el rival se confíe\ny, al bajar la guardia, le da un mordisco con sus\nenormes fauces del que no se puede liberar.",
		it: "Distrae i nemici con la sua faccia innocente,\nper poi azzannarli con le sue possenti mascelle.\nNon molla la presa a nessun costo.",
		de: "Mit seinem friedlichen Gesicht wiegt es Gegner\nin Sicherheit und beißt dann mit seinem riesigen\nKiefer zu. Danach gibt es kein Entkommen mehr.",
		'pt-br': "Usa seu rosto dócil para fazer seus inimigos\ncomplacentes e então os morde com suas\nmandíbulas enormes sem dar trégua.",
		ko: "얌전한 얼굴로 상대를 방심하게\n만들고 큰 턱으로 덥석 문다.\n한번 물면 절대로 놓지 않는다."
	},

	boosters: ["charizard"]
}

export default card
