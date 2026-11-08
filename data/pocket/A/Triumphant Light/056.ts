import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'es-es': "Mawile",
		'it-it': "Mawile",
		'de-de': "Flunkifer",
		'pt-br': "Mawile",
		'ko-kr': "입치트"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [303],
	hp: 70,
	types: ["Metal"],

	description: {
		'en-us': "It uses its docile-looking face to lull foes into complacency, then bites with its huge, relentless jaws.",
		'fr-fr': "Trompés par son visage innocent, ses ennemis se font happer\npar ses énormes mâchoires et ne peuvent plus s'échapper.",
		'es-es': "Con su cara inocente hace que el rival se confíe\ny, al bajar la guardia, le da un mordisco con sus\nenormes fauces del que no se puede liberar.",
		'it-it': "Distrae i nemici con la sua faccia innocente,\nper poi azzannarli con le sue possenti mascelle.\nNon molla la presa a nessun costo.",
		'de-de': "Mit seinem friedlichen Gesicht wiegt es Gegner\nin Sicherheit und beißt dann mit seinem riesigen\nKiefer zu. Danach gibt es kein Entkommen mehr.",
		'pt-br': "Usa seu rosto dócil para fazer seus inimigos\ncomplacentes e então os morde com suas\nmandíbulas enormes sem dar trégua.",
		'ko-kr': "얌전한 얼굴로 상대를 방심하게\n만들고 큰 턱으로 덥석 문다.\n한번 물면 절대로 놓지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Iron Beam Breaker",
			'fr-fr': "Broyeur d'Acier",
			'es-es': "Acerañicos",
			'it-it': "Spaccametallo",
			'de-de': "Stahlgerüstbrecher",
			'pt-br': "Quebrador de Viga Férrea",
			'ko-kr': "철골깨기"
		},

		damage: "20+",
		cost: ["Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {M} Pokémon, this attack does 30 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {M}, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {M}, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon {M}, questo attacco infligge 30 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {M}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {M}, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬이 {M}포켓몬이라면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
