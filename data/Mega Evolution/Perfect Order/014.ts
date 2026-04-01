import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		'es-mx': "Talonflame",
		de: "Fiaro",
		it: "Talonflame",
		pt: "Talonflame"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sky Hunt",
			fr: "Chasse Céleste",
			es: "Cacería Aérea",
			'es-mx': "Caza Aérea",
			de: "Jäger der Lüfte",
			it: "Caccia Aerea",
			pt: "Rapina Aérea"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Flip a coin. If heads, discard a random card from your opponent's hand.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Lege bei Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, descarte uma carta aleatória da mão do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
			es: "Ala Ígnea",
			'es-mx': "Ala Ígnea",
			de: "Feuerflügel",
			it: "Alafiamma",
			pt: "Asa de Fogo"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card