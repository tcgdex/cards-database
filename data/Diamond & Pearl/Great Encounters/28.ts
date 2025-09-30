import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		de: "Laschoking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Trump Card",
				fr: "Atout",
				de: "Trumpfkarte"
			},
			effect: {
				en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si 1 ou plusieurs de vos Pokémon ont été mis K.O lors du dernier tour de votre adversaire, choisissez n'importe quelle carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn mindestens 1 deiner Pokémon im letzten Zug deines Gegners kampfunfähig wurde, dein Deck nach 1 Karte durchsuchen und sie auf die Hand nehmen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Laschoking von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psych Up",
				fr: "Boost",
				de: "Psycho-Plus"
			},
			effect: {
				en: "During your next turn, Slowking's Psych Up attack's base damage is 60.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Boost de Roigada sont de 60.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Laschokings Angriff Psycho-Plus 60 Schadenspunkte."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277930,
		tcgplayer: 89316
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
