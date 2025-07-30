import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Togekiss",
		fr: "Togekiss",
		de: "Togekiss"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		468,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Serene Grace",
				fr: "Sérénité",
				de: "Edelmut"
			},
			effect: {
				en: "Once during your turn, when you play Togekiss from your hand to evolve 1 of your Pokémon, you may look at the top 10 cards of your deck, choose as many basic Energy cards as you like, and attach them to your Pokémon in any way you like. Put the other cards back on top of your deck. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Togekiss de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder les 10 cartes du dessus de votre deck. Choisissez autant de cartes Énergie de base que vous voulez et attachez-les à vos Pokémon de la façon que vous voulez. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
				de: "Einmal während deines Zuges, wenn du Togekiss von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dir die obersten 10 Karten deines Decks anschauen. Wähle beliebig viele Basis-Energiekarten, die du dort gefunden hast, und lege sie in beliebiger Veteilung an deine Pokémon an. Lege die restlichen Karten auf dein Deck zurück. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Scroll",
				fr: "Rouleau-air",
				de: "Luftrolle"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, remove 3 damage counters from Togekiss.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Si c'est pile, retirez à Togekiss 3 marqueurs de dégât.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu. Bei \"Zahl\" entferne 3 Schadensmarken von Togekiss."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277913,
		tcgplayer: 89923
	}
}

export default card
