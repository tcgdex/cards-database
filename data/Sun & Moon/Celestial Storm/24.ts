import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo",
		de: "Magcargo"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Smooth Over",
				fr: "Aplanir",
				es: "Terratemblor",
				it: "Risolvi Problemi",
				pt: "Atenuar",
				de: "Sanftes Gleiten"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte dans votre deck, mélanger votre deck, puis placer cette carte sur le dessus.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta, barajar las cartas de tu baraja y luego poner esa carta en la parte superior de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare una carta nel tuo mazzo, rimischiare le carte del tuo mazzo e poi mettere quella carta in cima al mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 carta no seu baralho, embaralhar o seu baralho e colocar aquela carta como a primeira carta do seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Karte durchsuchen, dein Deck mischen und anschließend jene Karte auf dein Deck legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				es: "Combustión",
				it: "Fuoco Continuo",
				pt: "Combustão",
				de: "Glühen"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 361271,
		tcgplayer: 170837
	}
}

export default card
