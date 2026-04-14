import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Pidgeot δ",
		fr: "Roucarnage δ",
		de: "Tauboss"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 100,

	types: [
		"Lightning",
		"Metal",
	],

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Reserve",
				fr: "Réserve Delta",
				de: "Delta-Reserve"
			},
			effect: {
				en: "As long as Pidgeot has any Holon Energy cards attached to it, each player's Pokémon (excluding Pokémon that has δ on its card) can't use any Poké-Powers.",
				fr: "Tant que Roucarnage possède des cartes Énergie Holon, les Pokémon de chaque joueur (Pokémon possédant le symbole δ exclus) ne peuvent pas utiliser de Poké-Powers.",
				de: "Solange an Tauboss mindestens eine Holon-Energiekarte angelegt ist, können Pokémon beider Spieler (außer Pokémon, auf denen δ zu sehen ist) keine Poké-Power benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Rotating Claws",
				fr: "Griffes tournantes",
				de: "Rotierende Klauen"
			},
			effect: {
				en: "You may discard an Energy card attached to Pidgeot. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Pidgeot.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Roucarnage. Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Roucarnage.",
				de: "Du kannst eine Energiekarte, die an Tauboss angelegt ist, auf den Ablagestapel legen. Wenn du das machst, durchsuche deinen Ablagestapel nach einer Energiekarte (außer der, die du abgelegt hast) und lege sie an Tauboss an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276984
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
