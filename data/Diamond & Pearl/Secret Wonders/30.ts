import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Kiss",
				fr: "Baiser glacial",
			},
			effect: {
				en: "If Jynx was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si une attaque a infligé des dégâts à Lippoutou lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lovely Kiss",
				fr: "Grobisou",
			},
			effect: {
				en: "Move 2 damage counters from Jynx to the Defending Pokémon. If Smoochum is anywhere under Jynx, move 4 damage counters instead.",
				fr: "Déplacez 2 marqueurs de dégât de Lippoutou sur le Pokémon Défenseur. Si Lippouti se trouve sous Lippoutou, déplacez 4 marqueurs de dégât.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
