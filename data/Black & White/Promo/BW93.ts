import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},
	illustrator: "Illus.＆Direc.The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Drain",
				fr: "Sangsue de l'Ombre",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
