import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Golduck",
		fr: "Akwakwak lumineux",
		de: "Helles Entoron"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flipper Stroke",
				fr: "Koud'palme",
				de: "Flossenschlag"
			},
			effect: {
				en: "Your opponent looks at the top 3 cards of his or her deck. If any of them are basic Energy cards, he or she may show any number of them to you and put them into his or her hand. You do the same. Either way, each player shuffles his or her deck.",
				fr: "Votre adversaire regarde les trois premières cartes du dessus de son deck. Si parmi elles se trouvent des cartes Énergie de base, il peut vous montrer n'importe quel nombre d'entre elles et les ajouter à sa main. Vous faites de même et chaque joueur mélange ensuite son deck.",
				de: "Dein Gegner schaut sich die obersten 3 Karten seines Decks an. Wenn darunter Basis-Energiekarten sind, darf er eine beliebige Anzahl davon dir zeigen und auf seine Hand nehmen. Du machst dasselbe. Unabhängig davon mischen danach alle Spieler ihr Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Blast",
				fr: "Explosion centrale",
				de: "Kernexplosion"
			},
			effect: {
				en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
				fr: "Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie spéciale attachée au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 20 Schadenspunkte für jede an das verteidigende Pokémon angelegte Spezial-Energiekarte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "The faster it swims, the brighter the glow on its forehead becomes.",
		fr: "Plus il nage vite, plus l'aura sur son front brille.",
		de: "Je schneller es schwimmt, desto heller wird das Leuchten auf seiner Stirn."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274699,
				tcgplayer: 86740
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274699,
				tcgplayer: 86740
			}
		}
	]
}

export default card
