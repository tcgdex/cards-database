import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'de-de': "Bronzong",
		'pt-br': "Bronzong",
		'ko-kr': "동탁군"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [437],
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Bronzor"
	},

	description: {
		'en-us': "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
		'fr-fr': "Il a longtemps été vénéré pour avoir apporté\nla pluie. On le trouve parfois enterré dans le sol.",
		'es-es': "Antaño se adoraba a este Pokémon para\nque propiciara lluvias abundantes. A veces,\npuede encontrarse enterrado bajo tierra.",
		'it-it': "È stato venerato per secoli come Pokémon che\nporta la pioggia. A volte lo si trova sepolto nel terreno.",
		'de-de': "Vor Urzeiten wurden sie als Regenmacher verehrt.\nManchmal findet man eines von ihnen im Boden vergraben.",
		'pt-br': "Nas idades antigas, este Pokémon era reverenciado\ncomo aquele que fazia chover. Ele foi descoberto\nenterrado no chão.",
		'ko-kr': "비구름을 부르는 포켓몬으로\n아주 옛날부터 떠받들어졌다.\n가끔 땅에 묻혀 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'de-de': "Psychokinese",
			'pt-br': "Psíquico",
			'ko-kr': "사이코키네시스"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'ko-kr': "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card
