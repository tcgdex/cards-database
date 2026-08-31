import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Tapu Lele-GX",
		fr: "Tokopiyon-GX",
		de: "Kapu-Fala-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",


	dexId: [786],
	set: Set,

	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wonder Tag",
				fr: "Relais Miracle",
				de: "Wunderfang"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Drive",
				fr: "Propulsion d’Énergie",
				de: "Energieantrieb"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon. This damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Tapu Cure-GX",
				fr: "Toko Soins-GX",
				de: "Kapu-Heilung-GX"
			},
			effect: {
				en: "Heal all damage from 2 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de 2 de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Heile allen Schaden bei 2 Pokémon auf deiner Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],


	retreat: 1,



}

export default card
