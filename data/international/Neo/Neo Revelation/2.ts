import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'de-de': "Heiteira"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Softboiled",
				'fr-fr': "Œuf-coque",
				'de-de': "Softboiled"
			},
			effect: {
				'en-us': "When you play Blissey from your hand, you may flip a coin. If heads, remove 8 damage counters from Blissey. If tails, remove 4 damage counters from Blissey. Either way, if Blissey has fewer damage counters than that, remove all of them.",
				'fr-fr': "Lorsque vous jouez Leuphorie depuis votre main, vous pouvez lancer une pièce. Si c'est face, retirez 8 marqueurs de dégâts sur Leuphorie. Si c'est pile, retirez-en 4. Dans les deux cas, si le nombre de marqueurs de dégâts sur Leuphorie est inférieur au nombre demandé, retirez-les tous.",
				'de-de': "When you play Blissey from your hand, you may flip a coin. If heads, remove 8 damage counters from Blissey. If tails, remove 4 damage counters from Blissey. Either way, if Blissey has fewer damage counters than that, remove all of them."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Body Slam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Anyone who takes even one bite of Blissey's egg becomes unfailingly caring and pleasant to everyone.",
		'fr-fr': "Quiconque mange une bouchée de l'œuf de Leuphorie devient tout de suite gentil avec tout le monde."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274588,
				tcgplayer: 83918
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274588,
				tcgplayer: 83918
			}
		}
	]
}

export default card
