import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		it: "Weezing",
		de: "Smogmog",
		'pt-br': "Weezing",
		ko: "또도가스"
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	evolveFrom: {
		en: "Koffing"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Gas Leak",
			fr: "Fuite de Gaz",
			es: "Escape de Gas",
			it: "Fuga di Gas",
			de: "Gasleck",
			'pt-br': "Vazamento de Gás",
			ko: "새어나가는 가스"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Poisoned.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Envenenado.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lasciare il Pokémon attivo del tuo avversario avvelenato.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du entscheiden, ob das Aktive Pokémon deines Gegners nun vergiftet ist.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá deixar o Pokémon Ativo do seu oponente Envenenado.",
			ko: "이 포켓몬이 배틀필드에 있다면 자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬을 독으로 만든다."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.",
		fr: "Si l'un des deux Smogo se gonfle, l'autre se dégonfle.\nIls mélangent leurs gaz en permanence.",
		es: "Si uno de los gemelos Koffing se\ninfla, el otro se desinfla. Mezclan\nconstantemente sus venenosos gases.",
		it: "Se un gemello Koffing si sgonfia, l'altro si gonfia.\nI gas velenosi dei due si mischiano continuamente.",
		de: "Pumpt sich eines der zwei Smogon auf, lässt das\nandere Luft ab. So findet ein Giftgasaustausch statt.",
		'pt-br': "Se um dos gêmeos Koffing inflar, o outro\nesvazia, misturando constantemente\nseus gases venenosos.",
		ko: "한쪽이 부풀어 오르면 다른 한쪽은\n오그라드는 쌍둥이 또가스. 항상\n체내의 독가스를 섞고 있다."
	},

	boosters: ["mewtwo"]
}

export default card
