import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

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

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		en: "It uses its docile-looking face to lull foes into complacency, then bites with its huge, relentless jaws.",
		fr: "Trompés par son visage innocent, ses ennemis se font happer\npar ses énormes mâchoires et ne peuvent plus s'échapper.",
		es: "Con su cara inocente hace que el rival se confíe\ny, al bajar la guardia, le da un mordisco con sus\nenormes fauces del que no se puede liberar.",
		it: "Distrae i nemici con la sua faccia innocente,\nper poi azzannarli con le sue possenti mascelle.\nNon molla la presa a nessun costo.",
		de: "Mit seinem friedlichen Gesicht wiegt es Gegner\nin Sicherheit und beißt dann mit seinem riesigen\nKiefer zu. Danach gibt es kein Entkommen mehr.",
		'pt-br': "Usa seu rosto dócil para fazer seus inimigos\ncomplacentes e então os morde com suas\nmandíbulas enormes sem dar trégua.",
		ko: "얌전한 얼굴로 상대를 방심하게\n만들고 큰 턱으로 덥석 문다.\n한번 물면 절대로 놓지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Iron Beam Breaker"
		},

		damage: "20+",
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a <span class=\"energy-text energy-text--type-metal\"></span> Pokémon, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
