import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Forretress",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
		fr: "Tannza",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Iron Shell",
				fr: "Coquille d'acier",
			},
			effect: {
				en: "Whenever you attach a basic Energy card from your hand to Forretress (excluding effects of attacks), you may flip a coin. If tails, put 2 damage counters on each Pokémon (both yours and your opponent's) (excluding any Forretress).",
				fr: "Dès que vous attachez une carte Énergie de base de votre main à Forretress (effets d'attaques exclus), lancez une pièce. Si c'est pile, placez 2 marqueurs de dégât sur chaque Pokémon (les vôtres et ceux de votre adversaire) (n'importe quel Forretress exclus).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
			},
			effect: {
				en: "Forretress does 40 damage to itself.",
				fr: "Forretress s'inflige 40 dégâts.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
