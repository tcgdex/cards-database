import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Flamigo",
		fr: "Flamenroule",
		es: "Flamigo",
		it: "Flamigo",
		de: "Flaminkno",
		'pt-br': "Flamigo",
		ko: "꼬이밍고"
	},

	illustrator: "REND",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "This Pokémon apparently ties the base of its neck into a knot so that energy stored in its belly does not escape from its beak.",
		fr: "On pense qu'il fait un nœud à la base de son cou\nafin d'empêcher l'énergie qu'il accumule\ndans son ventre de s'échapper par son bec.",
		es: "Al parecer, se anudan la base del cuello para\nimpedir que la energía que tienen almacenada\nen el estómago escape por el pico.",
		it: "Sembra che il nodo che fa alla base del collo\nserva a evitare che l'energia accumulata\nnel suo stomaco fuoriesca dal becco.",
		de: "Dieses Pokémon verknotet offenbar seinen Hals\nam Ansatz, damit die im Bauch gespeicherte Energie\nnicht über den Schnabel entweicht.",
		'pt-br': "Pelo visto, este Pokémon amarra a base de seu pescoço\nem um nó para que a energia armazenada\nem sua barriga não escape pelo bico.",
		ko: "배에 비축해 둔 에너지가\n부리를 통해 새어 나오지 않게 하기 위해\n목 아래쪽을 꼬아 놓은 듯하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Kick",
			fr: "Double Pied",
			es: "Doble Patada",
			it: "Doppiocalcio",
			de: "Doppelkick",
			'pt-br': "Chute Duplo",
			ko: "두번차기"
		},

		damage: "50x",
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia 2 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			ko: "동전을 2번 던져서 앞면이 나온 수 × 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card