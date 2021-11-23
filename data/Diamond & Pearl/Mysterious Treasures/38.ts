import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bad Temper",
				fr: "Mauvais caractère"
			},
			effect: {
				en: "The Defending Pokémon is now Confused. During your opponent's next turn, that Pokémon's attacks do 60 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Le Pokémon Défenseur est maintenant Confus. Lors du prochain tour de votre adversaire, les attaques de ce Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Defensive Claw",
				fr: "Griffe défensive"
			},
			effect: {
				en: "If Teddiursa is on your Bench, this attack does 60 damage plus 20 more damage. If Teddiursa on your Bench has any damage counters on it, this attack does 60 damage plus 40 more damage and remove all damage counters from that Pokémon.",
				fr: "Si Teddiursa est sur votre Banc, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires. Si le Teddiursa sur votre Banc possède des marqueurs de dégât, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires et retire à ce Pokémon tous ses marqueurs de dégât."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	description: {
		fr: "Il marque de ses griffes les arbres de son territoire qui portent des Baies ou des fruits."
	}
}

export default card
