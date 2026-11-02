import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Flame Bash",
				fr: "Coup de flammes",
				de: "Flammen schlagen"
			},
			effect: {
				en: "Flip a coin until you get tails. Search your deck for a number of basic Fire Energy cards up to the number of heads and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cherchez dans votre deck autant de cartes Énergie Fire que vous avez obtenu de faces et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Durchsuche dein Deck nach einer Anzahl {R}-Energiekarten, die höchstens der Anzahl „Kopf“ entspricht, und lege sie in beliebiger Verteilung an deine Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Mysterious Flames",
				fr: "Flammes mystérieuses",
				de: "Geheimnisvolle Flammen"
			},
			effect: {
				en: "If you have more Energy in play than your opponent, the Defending Pokémon is now Burned and Confused.",
				fr: "Si vous possédez plus d'Énergie en jeu que votre adversaire, le Pokémon Défenseur est maintenant Brûlé et Confus.",
				de: "Wenn du mehr Energie im Spiel hast als dein Gegner, ist das Verteidigende Pokémon jetzt verbrannt und verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		en: "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
		de: "Seine neun Schweife sollen mystische Kräfte besitzen. Es kann tausend Jahre leben."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87773,
				cardmarket: 278457
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278457,
				tcgplayer: 87773
			}
		}
	],

	retreat: 0
}

export default card
