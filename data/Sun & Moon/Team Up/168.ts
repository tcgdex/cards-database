import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Cobalion-GX",
		fr: "Cobaltium-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		638,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Metal Symbol",
				fr: "Symbole Métal",
			},
			effect: {
				en: "Each of your Pokémon that has any Metal Energy attached to it can't be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.",
				fr: "Aucun de vos Pokémon auquel de l’Énergie Metal est attachée ne peut être affecté par des États Spéciaux. Retirez tous les États Spéciaux affectant ces Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Dueling Saber",
				fr: "Sabre Duel",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 60 more damage.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Rule-GX",
				fr: "Volonté de Fer-GX",
			},
			effect: {
				en: "During your opponent's next turn, their Pokémon can't attack. (This includes Pokémon that come into play on that turn.) (You can't use more than 1 GX attack in a game.)",
				fr: "Pendant le prochain tour de votre adversaire, ses Pokémon ne peuvent pas attaquer. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
