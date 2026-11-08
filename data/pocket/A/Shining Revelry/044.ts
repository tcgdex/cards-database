import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flamigo",
		'fr-fr': "Flamenroule",
		'es-es': "Flamigo",
		'it-it': "Flamigo",
		'de-de': "Flaminkno",
		'pt-br': "Flamigo",
		'ko-kr': "꼬이밍고"
	},

	illustrator: "REND",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [973],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon apparently ties the base of its neck into a knot so that energy stored in its belly does not escape from its beak.",
		'fr-fr': "On pense qu'il fait un nœud à la base de son cou\nafin d'empêcher l'énergie qu'il accumule\ndans son ventre de s'échapper par son bec.",
		'es-es': "Al parecer, se anudan la base del cuello para\nimpedir que la energía que tienen almacenada\nen el estómago escape por el pico.",
		'it-it': "Sembra che il nodo che fa alla base del collo\nserva a evitare che l'energia accumulata\nnel suo stomaco fuoriesca dal becco.",
		'de-de': "Dieses Pokémon verknotet offenbar seinen Hals\nam Ansatz, damit die im Bauch gespeicherte Energie\nnicht über den Schnabel entweicht.",
		'pt-br': "Pelo visto, este Pokémon amarra a base de seu pescoço\nem um nó para que a energia armazenada\nem sua barriga não escape pelo bico.",
		'ko-kr': "배에 비축해 둔 에너지가\n부리를 통해 새어 나오지 않게 하기 위해\n목 아래쪽을 꼬아 놓은 듯하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Double Kick",
			'fr-fr': "Double Pied",
			'es-es': "Doble Patada",
			'it-it': "Doppiocalcio",
			'de-de': "Doppelkick",
			'pt-br': "Chute Duplo",
			'ko-kr': "두번차기"
		},

		damage: "50x",
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'ko-kr': "동전을 2번 던져서 앞면이 나온 수 × 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card