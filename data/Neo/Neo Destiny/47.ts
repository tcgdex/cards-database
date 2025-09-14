import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Golduck",
		fr: "Akwakwak lumineux",
		de: "Helles Entoron"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flipper Stroke",
				fr: "Koud'palme",
				de: "Flipper Stroke"
			},
			effect: {
				en: "Your opponent looks at the top 3 cards of his or her deck. If any of them are basic Energy cards, he or she may show any number of them to you and put them into his or her hand. You do the same. Either way, each player shuffles his or her deck.",
				fr: "Votre adversaire regarde les trois premières cartes du dessus de son deck. Si parmi elles se trouvent des cartes Énergie de base, il peut vous montrer n'importe quel nombre d'entre elles et les ajouter à sa main. Vous faites de même et chaque joueur mélange ensuite son deck.",
				de: "Your opponent looks at the top 3 cards of his or her deck. If any of them are basic Energy cards, he or she may show any number of them to you and put them into his or her hand. You do the same. Either way, each player shuffles his or her deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Blast",
				fr: "Explosion centrale",
				de: "Core Blast"
			},
			effect: {
				en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
				fr: "Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie spéciale attachée au Pokémon Défenseur.",
				de: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Plus il nage vite, plus l'aura sur son front brille."
	},

	thirdParty: {
		cardmarket: 274699,
		tcgplayer: 86740
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
