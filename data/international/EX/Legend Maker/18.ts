import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Huntail",
		'fr-fr': "Serpang",
		'de-de': "Aalabyss"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		367,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Reactive Generator",
				'fr-fr': "Générateur réactif",
				'de-de': "Reaktiver Generator"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Huntail has no React Energy cards attached to it, you may search your deck for a React Energy card and attach it to Huntail. Shuffle your deck afterward. This power can't be used if Huntail is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Serpang ne possède pas de cartes Énergie réaction, vous pouvez chercher dans votre deck une carte Énergie réaction et l'attacher à Serpang. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Serpang est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff), wenn an Aalabyss keine Reaktions-Energiekarte angelegt ist, kannst du dein Deck nach einer Reaktions-Energiekarte durchsuchen und an Aalabyss anlegen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Aalybyss von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite Off",
				'fr-fr': "Arracher d'un coup de dent",
				'de-de': "Abbeißen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276895,
		tcgplayer: 86237
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
