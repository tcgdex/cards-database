import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'de-de': "Sandamer"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [28],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Dig Down",
				'fr-fr': "Creuser vers le bas",
				'de-de': "Ausheben"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top 5 cards in your deck. Choose as many Fighting Energy cards as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward. This power can't be used if Sandslash is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 5 cartes du dessus de votre deck. Choisissez autant de cartes Énergie Fighting que vous le voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au-dessus de votre deck, puis mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Sablaireau est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die obersten 5 Karten deines Decks anschauen. Wähle beliebig viele -Energiekarten, die du dort gefunden hast, zeige sie deinem Gegner und nimm sie auf die Hand. Lege die anderen Karten zurück auf dein Deck. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Sandamer von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Needle",
				'fr-fr': "Aiguille",
				'de-de': "Nadel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt und vergiftet."
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
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It curls up, then rolls into foes with its back. Its sharp spines inflict severe damage."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88933,
				cardmarket: 278733
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278733,
				tcgplayer: 88933
			}
		},
	],

}

export default card
