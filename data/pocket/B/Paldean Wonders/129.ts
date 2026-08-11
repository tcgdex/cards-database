import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'fr-fr': "Forgelina",
		'en-us': "Tinkaton",
		'es-es': "Tinkaton",
		'it-it': "Tinkaton",
		'pt-br': "Tinkaton",
		'de-de': "Granforgita"
	},

	suffix: "EX",
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",

    hp: 170,
    types: ["Metal"],
    dexId: [959],

    stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Terrific Thumping",
			'fr-fr': "Écrasement Formidable",
			'es-es': "Martillazo Descomunal",
			'it-it': "Martellata Possente",
			'de-de': "Heftiges Hämmern",
			'pt-br': "Batida Extraordinária",
			'ko-kr': "호쾌스탬프"
		},

		damage: "80+",
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 80 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 80데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
}

export default card