import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		it: "Grimer",
		de: "Sleima"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nasty Goo",
				fr: "Mauvaise mélasse",
				it: "Collante Fetido",
				de: "Übler Dreck"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Minimize",
				fr: "Lilliput",
				it: "Minimizzazione",
				de: "Komprimator"
			},
			effect: {
				en: "All damage done by attacks to Grimer during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Tadmorv par des attaques durant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance.)",
				it: "Durante il prossimo turno del tuo avversario, tutto il danno inflitto a Grimer è ridotto di 20 (dopo aver applicato Debolezza e Resistenza).",
				de: "Aller Schaden, der Sleima während des nächsten Zuges durch Angriffe deines Gegners zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz abgerechnet wurden)."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
		fr: "Vivant dans les tas d'ordures, il se nourrit des déchets polluants rejetés par les usines.",
		it: "Vive in zone sporche e si nutre della fanghiglia inquinata che le fabbriche scaricano illegittimamente.",
		de: "Erscheint in schmutzigen Gegenden. Nährt sich bestens vom verunreinigten Klärschlamm, der aus Fabriken abgepumpt wird."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273909,
				tcgplayer: 44450
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273909,
				tcgplayer: 44450
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273909,
				tcgplayer: 44450
			}
		},
	],
}

export default card
