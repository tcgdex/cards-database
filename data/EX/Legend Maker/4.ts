import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		de: "Enekoro"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reactive Shift",
				fr: "Déplacement réactif",
				de: "Reaktiver Wechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a React Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Delcatty is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie réaction attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst Du 1 Reaktions-Energiekarten, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Enekoro von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Link",
				fr: "Chaîne d'énergie",
				de: "Energie-Verbindung"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Delcatty.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie et attachez-la à Delcatty.",
				de: "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Enekoro an."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue battoir",
				de: "Schweifvertrimmer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276881,
		tcgplayer: 84738
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
