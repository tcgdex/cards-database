import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Togekiss",
		fr: "Togekiss",
		es: "Togekiss",
		'es-mx': "Togekiss",
		de: "Togekiss",
		it: "Togekiss",
		pt: "Togekiss"
	},

	illustrator: "Narano",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",
	dexId: [468],

	abilities: [{
		type: "Ability",

		name: {
			en: "Wonder Kiss",
			fr: "Bisou Merveilleux",
			es: "Beso Asombroso",
			'es-mx': "Beso Asombroso",
			de: "Wunderkuss",
			it: "Bacio Meraviglia",
			pt: "Kiss Surpresa"
		},

		effect: {
			en: "When your opponent's Active Pokémon is Knocked Out, flip a coin. If heads, take 1 more Prize card. The effect of Wonder Kiss doesn't stack.",
			fr: "Lorsque le Pokémon Actif de votre adversaire est mis K.O., lancez une pièce. Si c'est face, récupérez une carte Récompense supplémentaire. L'effet de Bisou Merveilleux n'est pas cumulable.",
			es: "Cuando el Pokémon Activo de tu rival queda Fuera de Combate, lanza 1 moneda. Si sale cara, coge 1 carta de Premio más. El efecto de Beso Asombroso no se acumula.",
			'es-mx': "Cuando el Pokémon Activo de tu rival queda Fuera de Combate, lanza 1 moneda. Si sale cara, toma 1 carta de Premio más. El efecto de Beso Asombroso no se acumula.",
			de: "Wenn das Aktive Pokémon deines Gegners kampfunfähig wird, wirf 1 Münze. Nimm bei Kopf 1 Preiskarte mehr. Der Effekt von Wunderkuss stapelt sich nicht.",
			it: "Quando il Pokémon attivo del tuo avversario viene messo KO, lancia una moneta. Se esce testa, prendi una carta Premio in più. L'effetto di Bacio Meraviglia non è cumulabile.",
			pt: "Quando o Pokémon Ativo do seu oponente for Nocauteado, jogue uma moeda. Se sair cara, pegue 1 carta de Prêmio a mais. O efeito de Kiss Surpresa não acumula."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			es: "Ala Veloz",
			'es-mx': "Ala Veloz",
			de: "Turboschwinge",
			it: "Alaveloce",
			pt: "Asa da Velocidade"
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675894,
		cardmarket: 869693
	}
}

export default card