import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Magby",
		fr: "Magby"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby) and remove all damage counters from Magby.",
				fr: "Une seule fois lors votre tour (avant votre attaque), vous pouvez placer Magmar de votre main sur Magby (vous le faites ainsi évoluer) et retirer à Magby tous ses marqueurs de dégât."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Scorch",
				fr: "Brûler"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	description: {
		fr: "Sa température corporelle avoisine les 600°C. Son souffle est jaune quand il est en bonne santé."
	}
}

export default card
