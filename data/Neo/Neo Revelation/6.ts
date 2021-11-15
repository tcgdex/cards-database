import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Howl",
				fr: "Aboiement"
			},
			effect: {
				en: "When you play Entei from your hand, you may discard the top 5 cards from your deck. (if you have fewer cards in your deck than that, discard all of them.) If any of those are Fire Energy cards, attach them to any of your Fire Pokémon of your choice. Using this power ends your turn.",
				fr: "Lorsque vous jouez Entei depuis votre main, vous pouvez défausser les 5 cartes du dessus de votre deck. (Si vous avez moins de 5 cartes dans votre deck, défaussez-les toutes). Si certaines de ces cartes sont des cartes Énergie , attachez-les à l'un des Pokémon  de votre choix. Utiliser ce pouvoir termine votre tour."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Searing Flames",
				fr: "Flammes calcinantes"
			},
			effect: {
				en: "Discard 2 Energy cards attached to Entei or this attack does nothing.",
				fr: "Défaussez 2 cartes Énergie  attachées à Entei pour utiliser cette attaque."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Son cri déclenche des éruptions volcaniques. Incapable de contrôler son extrême puissance, il fonce tête baissée dans tout le pays."
	}
}

export default card
