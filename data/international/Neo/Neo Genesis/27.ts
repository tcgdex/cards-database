import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'de-de': "Ariados"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spider Web",
				'fr-fr': "Toile",
				'de-de': "Spider Web"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't retreat. (Benching or evolving that Pokémon ends this effect.)",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas battre en retraite. (Envoyer ce Pokémon sur le Banc ou le faire évoluer met fin à cet effet.)",
				'de-de': "Flip a coin. If heads, the Defending Pokémon can't retreat. (Benching or evolving that Pokémon ends this effect.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poison Bite",
				'fr-fr': "Morsure empoisonnée",
				'de-de': "Poison Bite"
			},
			effect: {
				'en-us': "If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them.",
				'fr-fr': "Si cette attaque inflige des dégâts au Pokémon Défenseur, le Pokémon Défenseur est maintenant Empoisonné et vous retirez de Migalos un nombre de marqueurs de dégâts égal à la moitié de ces dégâts (arrondi à la dizaine la plus proche). Si Migalos a moins de marqueurs de dégâts que cela, retirez-les tous.",
				'de-de': "If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It spins string not only from its rear but also from its mouth. It's hard to tell which end is which.",
		'fr-fr': "Il file sa toile non seulement depuis son derrière, mais aussi depuis sa bouche. Il est difficile de différencier l'avant de l'arrière."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274427,
				tcgplayer: 83615
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274427,
				tcgplayer: 83615
			}
		}
	]
}

export default card
