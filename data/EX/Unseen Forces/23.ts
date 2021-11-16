import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Elekid"
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		239,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Elektek de votre main sur Elekid (vous faites ainsi évoluer Elekid) et retirer à Elekid tous ses marqueurs de dégât."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Magnetic Trip",
				fr: "Croche-pied magnétique"
			},
			effect: {
				en: "If Low Pressure System is in play, the Defending Pokémon is now Confused.",
				fr: "Si Système à basse pression est en jeu, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
