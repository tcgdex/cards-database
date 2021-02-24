import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Latias-EX",
		fr: "Latias-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 160,
	types: [
		"Dragon",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bright Down",
				fr: "Bouclier Lumineux",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon with Abilities.",
				fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par les Pokémon de votre adversaire dotés de capacités spéciales.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Barrier Break",
				fr: "Brise Barrière",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
