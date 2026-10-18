import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Charizard",
		es: "Charizard",
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		es: "Charmeleon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recall",
				es: "Recordar",
			},
			effect: {
				en: "Choose 1 of this Pokémon's attacks from its previous Evolutions and use it as this attack.",
				es: "Elige 1 de los ataques de las Evoluciones anteriores de este Pokémon y úsalo para este ataque.",
			},
		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion Blast",
				es: "Estallido Fuego",
			},
			effect: {
				en: "This Pokémon can't use Combustion Blast during your next turn.",
				es: "Este Pokémon no puede usar Estallido Fuego durante tu próximo turno.",
			},

			damage: 130,
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "No matter what happens, if we stick together, we can get past it. Forever and ever.",
		es: "Pase lo que pase, si nos mantenemos unidos, podremos superarlo. Por siempre jamás.",
	},

	thirdParty: {
		tcgplayer: 113746
	}
}

export default card
