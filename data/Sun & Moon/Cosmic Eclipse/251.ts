import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Charizard & Braixen-GX",
		fr: "Dracaufeu et Roussil-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 270,
	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Brilliant Flare",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "You may search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			},
			damage: 180,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Crimson Flame Pillar GX",
				fr: "Flamboiement Brillant",
			},
			effect: {
				en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), your opponent's Active Pokémon is now Burned and Confused. (You can't use more than 1 GX attack in a game.)",
				fr: "Vous pouvez chercher jusqu’à 3 cartes dans votre deck et les ajouter à votre main. Mélangez ensuite votre deck.",
			},
			damage: 180,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Colonne de Flamme Écarlate-GX",
			},
			effect: {
				fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
