import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Zeraora-GX",
		fr: "Zeraora-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		807,
	],
	hp: 190,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thunderclap Zone",
				fr: "Zone Vif Éclair",
			},
			effect: {
				en: "Each of your Pokémon that has any Lightning Energy attached to it has no Retreat Cost.",
				fr: "Aucun de vos Pokémon auxquels de l’Énergie Lightning est attachée n’a de Coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Plasma Fists",
				fr: "Plasma Punch",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 160,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Full Voltage-GX",
				fr: "Pleine Tension-GX",
			},
			effect: {
				en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
