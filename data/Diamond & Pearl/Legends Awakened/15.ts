import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Slow Start",
				fr: "Début Calme",
			},
			effect: {
				en: "Regigigas can't attack until your opponent has 3 or less Prize cards left.",
				fr: "Regigigas ne peut attaquer que s'il ne reste plus à votre adversaire qu'un maximum de 3 cartes Récompense.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Crush Grip",
				fr: "Presse",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 40 instead of 120.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 40 au lieu de 120.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
