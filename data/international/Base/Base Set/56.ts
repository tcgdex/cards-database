import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix",
		'it-it': "Onix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'de-de': "Steinwurf",
				'it-it': "Sassata"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Harden",
				'fr-fr': "Armure",
				'de-de': "Härtner",
				'it-it': "Rafforzatore"
			},
			effect: {
				'en-us': "During opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, à chaque fois que 30 dégâts ou moins sont infligés à Onix (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Immer wenn Onix während des nächsten gegnerischen Zugs 30 oder weniger Schadenspunkte zugefügt werden, verhindere diesen Schaden (nachdem Schwäche und Resistenz abgerechnet wurden), (Alle anderen Auwirkungen von Angriffen finden immer noch statt).",
				'it-it': "Durante il prossimo turno del tuo avversario, ogni volta che a Onix vengono inflitti 30 o meno (dopo aver usato Debolezza e Resistenza), previeni tale danno. (Tutti gli altri effetti degli attacchi restano validi.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "As it grows, the stone portions of its body harden to become similar to a diamond, though colored black.",
		'fr-fr': "Les parties en pierre de son corps durcissent pour devenir comme un diamant de couleur noire.",
		'it-it': "Man mano che cresce, la parte di pietra del suo corpo si indurisce fino a diventare simile al diamante, ma di colore nero. LIV 12 N.95"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273751,
				tcgplayer: 42400
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107053
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107053
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
