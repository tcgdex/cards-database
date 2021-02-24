import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Naganadel & Guzzlord-GX",
		fr: "Mandrillon et Engloutyran-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		799,
	],
	hp: 280,
	types: [
		"Dragon",
	],


	suffix: "TAG TEAM-GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Violent Appetite",
				fr: "Appétit Insatiable",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Pokémon from your hand. If you do, heal 60 damage from this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Pokémon de votre main. Dans ce cas, soignez 60 dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Jet Pierce",
				fr: "Règle des ESCOUADES",
			},

			damage: 180,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Chaotic Order-GX",
				fr: "Jet Perçant",
			},
			effect: {
				en: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) If this Pokémon has at least 1 extra Psychic Energy and 1 extra Darkness Energy attached to it (in addition to this attack's cost), take 2 Prize cards. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 180,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Ordre Chaotique-GX",
			},
			effect: {
				fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.) Si au moins une Énergie Psychic supplémentaire et une Énergie Darkness supplémentaire sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 2 cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
