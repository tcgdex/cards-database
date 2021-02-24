import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shady Tail",
				fr: "Ombre Caudale",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, (Prism Star) Pokémon in play (both yours and your opponent's) can't attack and have no Abilities.",
				fr: "Tant que ce Pokémon est sur votre Banc, les Pokémon  (Prisme Étoile) en jeu (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer et n’ont pas de talent.",
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
				en: "Knock Away",
				fr: "Asticotage",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
