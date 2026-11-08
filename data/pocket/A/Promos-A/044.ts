import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'de-de': "Raichu",
		'pt-br': "Raichu",
		'ko-kr': "라이츄"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "None",
	category: "Pokemon",

	dexId: [26],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pikachu"
	},

	description: {
		'en-us': "Its tail discharges electricity into the ground,\nprotecting it from getting shocked.",
		'fr-fr': "Il se protège des décharges grâce à sa queue,\nqui dissipe l'électricité dans le sol.",
		'es-es': "Su cola actúa como toma de tierra\ny descarga electricidad al suelo, lo\nque le protege de los calambrazos.",
		'it-it': "La sua coda scarica elettricità a terra,\nproteggendolo dalle scosse elettriche.",
		'de-de': "Mithilfe seines Schweifs entlädt es Elektrizität\nin den Boden, um sich auf diese Weise vor\nelektrischen Schlägen zu schützen.",
		'pt-br': "Sua cauda descarrega a eletricidade\nno solo, protegendo-o contra choques.",
		'ko-kr': "꼬리가 어스 역할을 하여\n전기를 지면으로 흘려보내므로\n자신은 감전되거나 하지 않는다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Resilience Link",
			'fr-fr': "Lien Protection",
			'es-es': "Vínculo Protector",
			'it-it': "Tenacia Simbiotica",
			'de-de': "Widerstandskopplung",
			'pt-br': "Elo de Resiliência",
			'ko-kr': "가드 링크"
		},

		effect: {
			'en-us': "If you have Arceus or Arceus ex in play, this Pokémon takes −30 damage from attacks.",
			'fr-fr': "Si vous avez Arceus ou Arceus-ex en jeu, ce Pokémon subit − 30 dégâts provenant des attaques.",
			'es-es': "Si tienes a Arceus o Arceus ex en juego, los ataques hacen -30 puntos de daño a este Pokémon.",
			'it-it': "Se hai in gioco Arceus o Arceus-ex, questo Pokémon subisce -30 danni dagli attacchi.",
			'de-de': "Wenn du Arceus oder Arceus-ex im Spiel hast, werden diesem Pokémon durch Attacken − 30 Schadenspunkte zugefügt.",
			'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, este Pokémon receberá −30 pontos de dano de ataques.",
			'ko-kr': "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」 있다면 이 포켓몬이 받는 기술의 데미지를 -30한다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spark",
			'fr-fr': "Étincelle",
			'es-es': "Chispa",
			'it-it': "Scintilla",
			'de-de': "Funkensprung",
			'pt-br': "Faísca",
			'ko-kr': "스파크"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"],

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol5"]
}

export default card
