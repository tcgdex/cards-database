import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
		de: "Sarzenia"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Acid Sampler",
				fr: "Répandre de l'acide",
				de: "Acid Sampler"
			},
			effect: {
				en: "As long as Victreebel is your Active Pokémon, put 1 damage counter on each Defending Pokémon between turns. Acid Sampler stops working if your other Active Pokémon is not a Victreebel.",
				fr: "Tant qu'Empiflor est votre Pokémon Actif, placez un marqueur de dégât sur chaque Pokémon Défenseur entre deux tours. Échantillon d'acide est annulé si votre autre Pokémon Actif n'est pas un Empiflor.",
				de: "As long as Victreebel is your Active Pokémon, put 1 damage counter on each Defending Pokémon between turns. Acid Sampler stops working if your other Active Pokémon is not a Victreebel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acid",
				fr: "Acide",
				de: "Acid"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				de: "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276193,
		tcgplayer: 90362
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
