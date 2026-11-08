import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Mimic",
				'fr-fr': "Copie",
				'es-es': "Mimético",
				'it-it': "Mimica",
				'pt-br': "Mímica",
				'de-de': "Mimikry"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a card for each card in your opponent’s hand.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada carta na mão do seu oponente.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Play Rough",
				'fr-fr': "Câlinerie",
				'es-es': "Carantoña",
				'it-it': "Carineria",
				'pt-br': "Jogo Duro",
				'de-de': "Knuddler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],


	retreat: 1,




	description: {
		'en-us': "A lonely Pokémon, it conceals its terrifying appearance beneath an old rag so it can get closer to people and other Pokémon.",
	},
}

export default card
