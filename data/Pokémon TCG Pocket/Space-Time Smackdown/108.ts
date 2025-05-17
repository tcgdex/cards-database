import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		de: "Toxiquak",
		'pt-br': "Toxicroak",
		ko: "독개굴"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Croagunk"
	},

	description: {
		en: "Swaying and dodging the attacks of its foes, it weaves its flexible body in close, then lunges out with its poisonous claws.",
		fr: "Il esquive avec souplesse les attaques de ses\nadversaires tout en bondissant dans leur direction,\npuis il riposte de ses griffes empoisonnées.",
		es: "Esquiva ágilmente los ataques de sus\nenemigos mientras va acortando distancias\npara contraatacar con sus garras venenosas.",
		it: "Con il suo corpo flessibile schiva l'attacco del\nnemico e lo trafigge al volo con spine velenose.",
		de: "Mit seinem geschmeidigen Körper weicht es\nAttacken aus und durchbricht die Deckung des\nGegners, um mit seinen Giftklauen zuzustechen.",
		'pt-br': "Balançando e desviando dos ataques dos inimigos,\neste Pokémon usa seu corpo flexível para se aproximar\ne, em seguida, atacar com suas garras venenosas.",
		ko: "유연한 몸으로 상대의 공격을 피하며\n깊숙이 뛰어들어 독가시를 꿰찌른다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Group Beatdown",
			fr: "Raclée Collective",
			es: "Paliza Grupal",
			it: "Rissa",
			de: "Gruppenprügler",
			'pt-br': "Abater em Grupo",
			ko: "다함께 때려잡기"
		},

		damage: "40×",
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Flip a coin for each Pokémon you have in play. This attack does 40 damage for each heads.",
			fr: "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			es: "Lanza 1 moneda por cada Pokémon que tengas en juego. Este ataque hace 40 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Pokémon che hai in gioco. Questo attacco infligge 40 danni ogni volta che esce testa.",
			de: "Wirf 1 Münze für jedes Pokémon, das du im Spiel hast. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 1 moeda para cada Pokémon que você tem em jogo. Este ataque causa 40 pontos de dano para cada cara.",
			ko: "자신의 필드의 포켓몬의 수만큼 동전을 던져서 앞면이 나온 수 40× 40데미지를[/Ctrl:NoBreak] 준다."
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
