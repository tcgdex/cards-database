import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Gardevoir-GX",
		fr: "Gardevoir-GX",
		de: "Guardevoir-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 230,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Secret Spring",
				fr: "Rebond Secret",
				de: "Geheime Quelle"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fairy Energy card from your hand to 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fairy de votre main à l’un de vos Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 {FAIRY}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Infinite Force",
				fr: "Force Infinie",
				de: "Unendliche Macht"
			},
			effect: {
				en: "This attack does 30 damage times the amount of Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Twilight-GX",
				fr: "Tombée de la Nuit-GX",
				de: "Zwielicht-GX"
			},
			effect: {
				en: "Shuffle 10 cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Mélangez 10 cartes de votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Mische 10 Karten aus deinem Ablagestapel in dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
