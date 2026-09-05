import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		it: "Snorlax",
		de: "Relaxo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Munchlax",
		fr: "Goinfrex",
		it: "Munchlax",
		de: "Mampfaxo"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Thick Skinned",
				fr: "Dur à cuire",
				it: "Pellaccia",
				de: "Dickhäuter"
			},
			effect: {
				en: "Snorlax can't become Asleep, Confused, Paralyzed, or Poisoned. This power can't be used if Snorlax is already Asleep, Confused, or Paralyzed.",
				fr: "Ronflex ne peut pas devenir Endormi, Confus, Paralysé ou Empoisonné. Ce pouvoir ne peut être utilisé si Ronflex est déjà Endormi, Confus ou Paralysé.",
				it: "Snorlax non può essere Addormentato, Confuso, Paralizzato o Avvelenato. Questo potere non funziona quando Snorlax è già Addormentato, Confuso o Paralizzato.",
				de: "Relaxo kann nicht in den Schlaf versetzt, verwirrt, gelähmt oder vergiftet werden. Diese Fähigkeit kann nicht eingesetzt werden, falls Relaxo schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				it: "Body Slam",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

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
	retreat: 4,


	description: {
		en: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
		fr: "Très paresseux, il ne fait que manger et dormir. Plus il est gros, plus il devient fainéant.",
		it: "Molto pigro, mangia e dorme solamente. Più ingrassa più diventa svogliato.",
		de: "Totaler Faulenzer. Frisst und schläft nur. Je mehr seine rundliche Masse zunimmt, desto träger wird es."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273808,
				tcgplayer: 106989
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273808,
				tcgplayer: 106989
			}
		}
	],
}

export default card
