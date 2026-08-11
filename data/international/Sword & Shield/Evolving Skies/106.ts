import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
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
			'en-us': "Tempting Tune",
			'fr-fr': "Chant Tentant",
			'es-es': "Trino Tentador",
			'it-it': "Melodia Allettante",
			'pt-br': "Tempting Tune",
			'de-de': "Lockgesang"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Supporter card, reveal it, shuffle your deck, then put that card on top of it.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Supporter, la montrer, mélanger votre deck, puis placer cette carte sur le dessus de votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Partidario, enseñarla, barajar las cartas de tu baraja y luego poner esa carta en la parte superior de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla, rimischiare le carte del tuo mazzo e poi mettere quella carta in cima al mazzo.",
			'pt-br': "Once during your turn, you may search your deck for a Supporter card, reveal it, shuffle your deck, then put that card on top of it.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen, dein Deck mischen und jene Karte anschließend darauflegen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Glide",
			'de-de': "Gleiten"
		},

		damage: 60,
		cost: ["Water", "Metal"]
	}],

	retreat: 0,
	dexId: [334],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	description: {
		'en-us': "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574154,
				tcgplayer: 246906
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574154,
				tcgplayer: 246906
			}
		},
	],
}

export default card
