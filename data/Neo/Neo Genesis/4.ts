import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		de: "Tyracroc"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Berserk",
				fr: "Folie meurtrière",
				de: "Berserken"
			},
			effect: {
				en: "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent's deck. If tails, discard the top 5 cards from your deck.",
				fr: "Lorsque vous jouez Aligatueur depuis votre main, lancez une pièce. Si c'est face, défaussez les 5 premières cartes du dessus du deck de votre adversaire. Si c'est pile, défaussez les 5 premières cartes du dessus de votre deck.",
				de: "Wirf eine Münze, wenn du Impergator aus deiner Hand ausspielst. Lege bei „Kopf“ die obersten fünf Karten vom Deck deines Gegners auf seinen Ablagestapel. Lege bei „Zahl“ die obersten fünf Karten deines Decks auf deinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Chomp",
				fr: "Croc",
				de: "Schmatzen"
			},
			effect: {
				en: "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces égal au nombre de marqueurs de dégâts sur Aligatueur. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Wirf so viele Münzen, wie Schadensmarken auf Impergator liegen. Dieser Angriff fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte pro geworfenen „Kopf“ zu."
			},
			damage: "50+",

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
		en: "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.",
		fr: "Lorsqu'il mord avec ses puissantes mâchoires, il secoue la tête et déchire sauvagement ses victimes en morceaux.",
		de: "Wenn es mit seinen massiven und mächtigen Kiefern zubeißt, schüttelt es den Kopf und zerreißt sein Opfer schonungslos."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274404,
				tcgplayer: 85412
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274404,
				tcgplayer: 85412
			}
		}
	]
}

export default card
