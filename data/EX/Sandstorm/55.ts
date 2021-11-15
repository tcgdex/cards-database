import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Natu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Wind",
				fr: "Vent guérisseur"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Active Pokémon. This power can't be used if Xatu is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât à chacun de vos Pokémon Actifs. Ce pouvoir ne peut pas être utilisé si Xatu est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyimpact",
				fr: "Impact psy"
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Placez un marqueur de dégât sur chacun des Pokémon de votre adversaire."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
