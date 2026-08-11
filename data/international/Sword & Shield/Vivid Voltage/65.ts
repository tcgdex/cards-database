import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [203],

	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psypower",
				'fr-fr': "Puissance Psy",
				'es-es': "Psicopoder",
				'it-it': "Psicotere",
				'pt-br': "Poder Psíquico",
				'de-de': "Psy-Power"
			},
			effect: {
				'en-us': "Put 2 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
				'es-es': "Pon 2 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Metti due segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
				'pt-br': "Coloque 2 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege 2 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Commanding Tail",
				'fr-fr': "Queue Imposante",
				'es-es': "Cola al Mando",
				'it-it': "Coda di Comando",
				'pt-br': "Cauda Comandante",
				'de-de': "Rumkommandieren"
			},
			effect: {
				'en-us': "You may have your opponent shuffle their hand into their deck. If you do, your opponent draws 4 cards.",
				'fr-fr': "Vous pouvez demander à votre adversaire de mélanger sa main avec son deck. Dans ce cas, votre adversaire pioche 4 cartes.",
				'es-es': "Puedes hacer que tu rival ponga las cartas de su mano en su baraja y las baraje todas. Si lo haces, tu rival roba 4 cartas.",
				'it-it': "Puoi far rimischiare al tuo avversario le carte che ha in mano nel suo mazzo. Se lo fai, il tuo avversario pesca quattro carte.",
				'pt-br': "Você pode fazer com que o seu oponente embaralhe a própria mão no baralho dele(a). Se fizer isto, seu oponente comprará 4 cartas.",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, seine Handkarten in sein Deck zu mischen. Wenn du das machst, zieht dein Gegner 4 Karten."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its tail has a small brain of its own. Beware! If you get close, it may react to your scent by biting."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511745,
				tcgplayer: 226469
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511745,
				tcgplayer: 226469
			}
		},
	],
}

export default card
