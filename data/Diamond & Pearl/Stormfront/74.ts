import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Snover",
		fr: "Blizzi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 50,

	types: [
		"Water",
	],

	evolveFrom: {
		fr: "Blizzi",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hide",
				fr: "Cachette",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Snover during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Blizzi lors du prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il vit sur les monts enneigés. Ignorant des coutumes humaines, il lui arrive d'être très indiscret."
	}
}

export default card
