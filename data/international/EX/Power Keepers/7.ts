import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Cradily",
		fr: "Vacilys",
		de: "Wielie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		346,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Lileep",
		fr: "Lilia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Call",
				fr: "Appel à l'évolution",
				de: "Evolutionsruf"
			},
			effect: {
				en: "Once during your turn, when you play Cradily from your hand to evolve 1 of your Pokémon, you may search your deck for up to 3 in any combination of Basic Pokémon or Evolution cards. Show them to your opponent and put them into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Vacilys de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre deck n'importe quelle combinaison de jusqu'à 3 Pokémon de base ou cartes Évolution. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Einmal während deines Zuges, wenn du Wielie von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach bis zu 3 Basis-Pokémon-, oder Evolutionskarten in beliebiger Kombination durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de poison",
				de: "Giftring"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277313,
		tcgplayer: 84453
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
