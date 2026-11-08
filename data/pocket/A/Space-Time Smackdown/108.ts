import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'de-de': "Toxiquak",
		'pt-br': "Toxicroak",
		'ko-kr': "독개굴"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [454],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Croagunk"
	},

	description: {
		'en-us': "Swaying and dodging the attacks of its foes, it weaves its flexible body in close, then lunges out with its poisonous claws.",
		'fr-fr': "Il esquive avec souplesse les attaques de ses\nadversaires tout en bondissant dans leur direction,\npuis il riposte de ses griffes empoisonnées.",
		'es-es': "Esquiva ágilmente los ataques de sus\nenemigos mientras va acortando distancias\npara contraatacar con sus garras venenosas.",
		'it-it': "Con il suo corpo flessibile schiva l'attacco del\nnemico e lo trafigge al volo con spine velenose.",
		'de-de': "Mit seinem geschmeidigen Körper weicht es\nAttacken aus und durchbricht die Deckung des\nGegners, um mit seinen Giftklauen zuzustechen.",
		'pt-br': "Balançando e desviando dos ataques dos inimigos,\neste Pokémon usa seu corpo flexível para se aproximar\ne, em seguida, atacar com suas garras venenosas.",
		'ko-kr': "유연한 몸으로 상대의 공격을 피하며\n깊숙이 뛰어들어 독가시를 꿰찌른다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Group Beatdown",
			'fr-fr': "Raclée Collective",
			'es-es': "Paliza Grupal",
			'it-it': "Rissa",
			'de-de': "Gruppenprügler",
			'pt-br': "Abater em Grupo",
			'ko-kr': "다함께 때려잡기"
		},

		damage: "40×",
		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "Flip a coin for each Pokémon you have in play. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			'es-es': "Lanza 1 moneda por cada Pokémon que tengas en juego. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Pokémon che hai in gioco. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'de-de': "Wirf 1 Münze für jedes Pokémon, das du im Spiel hast. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 1 moeda para cada Pokémon que você tem em jogo. Este ataque causa 40 pontos de dano para cada cara.",
			'ko-kr': "자신의 필드의 포켓몬의 수만큼 동전을 던져서 앞면이 나온 수 40× 40데미지를[/Ctrl:NoBreak] 준다."
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
