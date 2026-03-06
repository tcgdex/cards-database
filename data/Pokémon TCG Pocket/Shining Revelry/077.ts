import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Gholdengo",
		fr: "Gromago",
		es: "Gholdengo",
		it: "Gholdengo",
		de: "Monetigo",
		'pt-br': "Gholdengo",
		ko: "타부자고"
	},

	illustrator: "Jerky",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [1000],
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Gimmighoul"
	},

	description: {
		en: "Its body seems to be made up of 1,000 coins. This Pokémon gets along well with others and is quick to make friends with anybody.",
		fr: "Son corps serait composé de 1 000 pièces. Sociable,\nil peut se lier d'amitié très rapidement avec n'importe qui.",
		es: "Se dice que su cuerpo está formado por 1000\nmonedas. Es capaz de hacer buenas migas con\ncualquiera rápidamente por su sociabilidad.",
		it: "Pare che il suo corpo sia formato da\n1.000 monete. È molto socievole e\nfa subito amicizia con chiunque.",
		de: "Sein Körper soll aus 1000 Münzen bestehen.\nEs ist sehr umgänglich und schließt mit jedem\nrasch Freundschaft.",
		'pt-br': "Seu corpo parece ser feito de 1.000 moedas.\nEste Pokémon se dá bem com os outros\ne faz amizades com qualquer um rapidamente.",
		ko: "몸은 1000개의 코인으로\n이뤄져 있다고 한다. 붙임성이 좋아서\n누구와도 금방 친해진다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Scintillating Surfing",
			fr: "Surf Scintillant",
			es: "Surfeo Resplandeciente",
			it: "Surf Scintillante",
			de: "Sensationelles Surfen",
			'pt-br': "Surfe Extravagante",
			ko: "럭셔리서핑"
		},

		damage: "50x",
		cost: ["Metal", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin for each {M} Energy attached to this Pokémon. This attack does 50 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie {M} attachée à ce Pokémon. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía {M} unida a este Pokémon. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia {M} assegnata a questo Pokémon. Questo attacco infligge 50 danni ogni volta che esce testa.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte {M}-Energie. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue uma moeda para cada Energia de {M} ligada a este Pokémon. Este ataque causa 50 pontos de dano para cada cara.",
			ko: "이 포켓몬의 {M}에너지의 개수만큼 동전을 던져서 앞면이 나온 수 {M}× 50[/Ctrl:NoBreak]데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
