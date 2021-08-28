import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

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
	stage: "Stage1",
	illustrator: "sui",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tempting Tune",
			fr: "Chant Tentant",
			es: "Trino Tentador",
			it: "Melodia Allettante",
			pt: "Tempting Tune",
			de: "Lockgesang"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Supporter card, reveal it, shuffle your deck, then put that card on top of it.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, mélanger votre deck, puis placer cette carte sur le dessus de votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla, barajar las cartas de tu baraja y luego poner esa carta en la parte superior de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla, rimischiare le carte del tuo mazzo e poi mettere quella carta in cima al mazzo.",
			pt: "Once during your turn, you may search your deck for a Supporter card, reveal it, shuffle your deck, then put that card on top of it.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen, dein Deck mischen und jene Karte anschließend darauflegen."
		}
	}],

	attacks: [{
		name: {
			en: "Glide",
			fr: "Glissement",
			es: "Planeo",
			it: "Aliante",
			pt: "Glide",
			de: "Gleiten"
		},

		damage: 60,
		cost: ["Water", "Metal"]
	}],

	retreat: 0
}

export default card