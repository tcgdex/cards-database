import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Revavroom",
		'fr-fr': "Vrombotor",
		'es-es': "Revavroom",
		'it-it': "Revavroom",
		'de-de': "Knattatox",
		'pt-br': "Revavroom",
		'ko-kr': "부르르룸"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [966],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Varoom"
	},

	description: {
		'en-us': "It creates a gas out of poison and minerals from rocks. It then detonates the gas in its cylinders— now numbering eight—to generate energy.",
		'fr-fr': "Il produit de l'énergie en faisant exploser dans\nses huit cylindres un mélange gazeux qui\ncontient une substance toxique et des minéraux.",
		'es-es': "Posee ocho cilindros, con los que genera energía\nhaciendo estallar el gas que produce al mezclar\nlos minerales de las rocas con su veneno.",
		'it-it': "Produce energia facendo esplodere\nnei suoi otto cilindri un gas che forma\nmescolando tossine e minerali delle rocce.",
		'de-de': "Mit seinen nunmehr acht Zylindern lässt es ein\nGasgemisch aus Gift und Gesteinsmineralien\nexplodieren, um daraus Energie zu gewinnen.",
		'pt-br': "Cria um gás a partir de veneno e minerais de pedras.\nEntão, detona o gás em seus cilindros,\nque agora são oito, para gerar energia.",
		'ko-kr': "독소와 바위 성분이 섞인 가스를\n8개로 늘어난 실린더에서 폭발시켜\n에너지를 만들어 낸다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Spinning Drift",
			'fr-fr': "Drift Tournoyant",
			'es-es': "Corriente Giratoria",
			'it-it': "Derapata Rotante",
			'de-de': "Rotationsdrift",
			'pt-br': "Derrapada Giratória",
			'ko-kr': "스핀드리프트"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card