import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Altaria",
		fr: "Altaria",
		es: "Altaria",
		it: "Altaria",
		pt: "Altaria",
		de: "Altaria"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
		es: "Swablu",
		it: "Swablu",
		pt: "Swablu",
		de: "Wablu"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tempting Tune",
			fr: "Chant Tentant",
			es: "Trino Tentador",
			it: "Melodia Allettante",
			pt: "Melodia Tentadora",
			de: "Lockgesang"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Supporter card, reveal it, shuffle your deck, then put that card on top of it.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, mélanger votre deck, puis placer cette carte sur le dessus de votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla, barajar las cartas de tu baraja y luego poner esa carta en la parte superior de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla, rimischiare le carte del tuo mazzo e poi mettere quella carta in cima al mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por 1 carta de Apoiador no seu baralho, revelá-la, embaralhar o seu baralho e, em seguida, colocá-la como a carta de cima do seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen, dein Deck mischen und jene Karte anschließend darauflegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			en: "Glide",
			fr: "Glissement",
			es: "Planeo",
			it: "Aliante",
			pt: "Planeio",
			de: "Gleiten"
		},

		damage: 60
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card