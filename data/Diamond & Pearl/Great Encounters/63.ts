import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Caterpie",
		fr: "Chenipan",
		de: "Raupy"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Pupate",
				fr: "Sortir de sa chrysalide",
				de: "Verpuppen"
			},
			effect: {
				en: "Once during your turn (before your attack), if Caterpie is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Caterpie and put it onto Caterpie. (This counts as evolving Caterpie.) Shuffle your deck afterward. This power can't be used if Caterpie is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Chenipan est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte qui évolue de Chenipan et placez-la sur Chenipan. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Chenipan est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Raupy dein Aktives Pokémon ist, kannst du 1 Münze werfen. Bei \"Kopf\" durchsuche dein Deck nach einer Karte, die sich aus Raupy entwickelt, und lege diese auf Raupy. (Dies zählt als Entwickeln von Raupy.) Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Raupy von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277965
	}
}

export default card
