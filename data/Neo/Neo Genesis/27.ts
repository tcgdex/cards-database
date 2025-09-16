import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
		de: "Ariados"
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
		en: "Spinarak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spider Web",
				fr: "Toile",
				de: "Spider Web"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't retreat. (Benching or evolving that Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas battre en retraite. (Envoyer ce Pokémon sur le Banc ou le faire évoluer met fin à cet effet.)",
				de: "Flip a coin. If heads, the Defending Pokémon can't retreat. (Benching or evolving that Pokémon ends this effect.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Bite",
				fr: "Morsure empoisonnée",
				de: "Poison Bite"
			},
			effect: {
				en: "If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them.",
				fr: "Si cette attaque inflige des dégâts au Pokémon Défenseur, le Pokémon Défenseur est maintenant Empoisonné et vous retirez de Migalos un nombre de marqueurs de dégâts égal à la moitié de ces dégâts (arrondi à la dizaine la plus proche). Si Migalos a moins de marqueurs de dégâts que cela, retirez-les tous.",
				de: "If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them."
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

	description: {
		fr: "Il file sa toile non seulement depuis son derrière, mais aussi depuis sa bouche. Il est difficile de différencier l'avant de l'arrière."
	},

	thirdParty: {
		cardmarket: 274427,
		tcgplayer: 83615
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
