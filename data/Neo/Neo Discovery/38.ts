import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Evolution",
				fr: "Évolution de l'Énergie",
				de: "Energie-Evolution"
			},
			effect: {
				en: "Whenever you attach an Energy card to Eevee, flip a coin. If heads, search your deck for that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Shuffle your deck afterward. This power can't be used if Eevee is Asleep, Confused, or Paralyzed.",
				fr: "Quand vous attachez une carte Énergie à Évoli, lancez une pièce. Si c'est face, cherchez dans votre deck une carte Évolution d'Évoli qui est du même type que la carte Énergie que vous venez de lui attacher. Attachez aussi cette carte à Évoli. Cela revient à le faire évoluer. Mélangez ensuite votre deck. Ce pouvoir ne peut être utilisé si Évoli est Endormi, Confus ou Paralysé.",
				de: "Immer wenn du eine Energiekarte an Evoli anlegst, wirf eine Münze. Durchsuche bei Kopf dein Deck nach einer Karte, die aus Evoli entsteht und denselben Typ, wie die Energiekarte, die du gerade an Evoli angelegt hast, hat. Lege die Karte auf Evoli. Dies zählt als Entwickeln von Evoli. Mische danach dein Deck. Diese Fähigkeit kann nicht verwendet werden, falls Evoli schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Ruade",
				de: "Schmetterkick"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Its irregularly configured DNA is affected by its surroundings. It evolves if its environment changes.",
		fr: "Son ADN instable est affecté par son environnement. Il évolue en fonction des changements de son habitat.",
		de: "Seine unnatürlich angeordnete DNA wird von seiner Umgebung beeinflusst. Es entwickelt sich mit seiner Umwelt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274549,
				tcgplayer: 85075
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274549,
				tcgplayer: 85075
			}
		}
	]
}

export default card

