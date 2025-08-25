import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		de: "Safcon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Emerge",
				fr: "Émerge",
				de: "Erscheinen"
			},
			effect: {
				en: "Once during your turn (before your attack), if Metapod is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Metapod and put it onto Metapod. (This counts as evolving Metapod.) Shuffle your deck afterward. This power can't be used if Metapod is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Chrysacier est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte qui évolue de Chrysacier et placez-la sur Chrysacier. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Chrysacier est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Safcon dein Aktives Pokémon ist, kannst du 1 Münze werfen. Bei \"Kopf\" durchsuche dein Deck nach einer Karte, die sich aus Safcon entwickelt, und lege diese auf Safcon. (Dies zählt als Entwickeln von Safcon.) Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Safcon von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277949,
		tcgplayer: 87390
	}
}

export default card
