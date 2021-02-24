import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Marvel Scale",
				fr: "Écaille spé.",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Milotic by your opponent's Pokémon LV.X.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Milobellus par les Pokémon LV.X de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
			},
			effect: {
				en: "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Si ce sont 2 piles, cette attaque est sans effet. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
