import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ninetales δ",
		fr: "Feunard δ ESPÈCES DELTA"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Volunteer",
				fr: "Volontaire"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 4 damage counters from Ninetales and discard Ninetales from Vulpix. If you do, search your deck for Ninetales or Ninetales ex and put it onto Vulpix (this counts as evolving Vulpix). Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirez 4 marqueurs de dégât de Feunard et défausser Feunard de Goupix. Cherchez alors dans votre deck Feunard ou Feunard ex et placez-le sur Goupix (vous le faites ainsi évoluer). Ensuite, mélangez votre deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trick Tail",
				fr: "Queue-piège"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to 1 of your Pokémon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie et attachez-la à 1 de vos Pokémon."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
