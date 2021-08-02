import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig",
		es: "Girafarig",
		it: "Girafarig",
		pt: "Girafarig",
		de: "Girafarig"
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
				en: "Psypower",
				fr: "Puissance Psy",
				es: "Psicopoder",
				it: "Psicotere",
				pt: "Poder Psíquico",
				de: "Psy-Power"
			},
			effect: {
				en: "Put 2 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
				es: "Pon 2 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Metti due segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
				pt: "Coloque 2 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege 2 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Commanding Tail",
				fr: "Queue Imposante",
				es: "Cola al Mando",
				it: "Coda di Comando",
				pt: "Cauda Comandante",
				de: "Rumkommandieren"
			},
			effect: {
				en: "You may have your opponent shuffle their hand into their deck. If you do, your opponent draws 4 cards.",
				fr: "Vous pouvez demander à votre adversaire de mélanger sa main avec son deck. Dans ce cas, votre adversaire pioche 4 cartes.",
				es: "Puedes hacer que tu rival ponga las cartas de su mano en su baraja y las baraje todas. Si lo haces, tu rival roba 4 cartas.",
				it: "Puoi far rimischiare al tuo avversario le carte che ha in mano nel suo mazzo. Se lo fai, il tuo avversario pesca quattro carte.",
				pt: "Você pode fazer com que o seu oponente embaralhe a própria mão no baralho dele(a). Se fizer isto, seu oponente comprará 4 cartas.",
				de: "Du kannst deinen Gegner dazu veranlassen, seine Handkarten in sein Deck zu mischen. Wenn du das machst, zieht dein Gegner 4 Karten."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
