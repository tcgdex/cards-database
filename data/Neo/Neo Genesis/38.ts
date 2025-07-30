import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Hydroelectric Power",
				fr: "Pouvoir hydroélectrique",
				de: "Hydroelectric Power"
			},
			effect: {
				en: "You may make Floodlight do 10 more damage for each Water Energy attached to Lanturn but not used to pay for Floodlight's Energy cost. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed.",
				fr: "Vous pouvez augmenter de 10 le nombre de dégâts infligés par Projecteur pour chaque Énergie  attachée à Lanturn mais non utilisée pour payer le coût en Énergie de Projecteur. Ce pouvoir ne peut être utilisé si Lanturn est Endormi, Confus ou Paralysé.",
				de: "You may make Floodlight do 10 more damage for each  Energy attached to Lanturn but not used to pay for Floodlight's Energy cost. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Floodlight",
				fr: "Projecteur",
				de: "Floodlight"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "La lumière qu'il produit est si brillante qu'elle atteint la surface de la mer depuis plus de 5 kilomètres de profondeur."
	},

	thirdParty: {
		cardmarket: 274438,
		tcgplayer: 86603
	}
}

export default card
