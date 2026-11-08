import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'pt-br': "Machamp",
		'de-de': "Machomei"
	},

	illustrator: "MPC Film",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Directing Traffic",
				'fr-fr': "Diriger la Circulation",
				'es-es': "Dirigir el Tráfico",
				'it-it': "Viabilità",
				'pt-br': "Guarda de Trânsito",
				'de-de': "Verkehrsregelung"
			},
			effect: {
				'en-us': "Look at the top 5 cards of your deck and put them back in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
				'es-es': "Mira las 5 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				'it-it': "Guarda le prime cinque carte del tuo mazzo e rimettile a posto nell’ordine che preferisci.",
				'pt-br': "Olhe as 5 primeiras cartas do seu baralho e coloque-as de volta em qualquer ordem.",
				'de-de': "Schau dir die obersten 5 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Cross Chop",
				'fr-fr': "Coup-Croix",
				'es-es': "Tajo Cruzado",
				'it-it': "Incrocolpo",
				'pt-br': "Golpe Cruzado",
				'de-de': "Kreuzhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It grasps its opponents with its four arms and twists them up in an intricate hold. People call it \"the Machamp special.\"",
	},

	thirdParty: {
		cardmarket: 370776,
		tcgplayer: 186021
	}
}

export default card
