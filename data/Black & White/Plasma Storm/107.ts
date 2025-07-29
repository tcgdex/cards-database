import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
		es: "Exploud",
		it: "Exploud",
		pt: "Exploud",
		de: "Krawumms"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Sound",
				fr: "Son Destructeur",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Discard all Item cards you find there.",
				fr: "Votre adversaire montre sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
			},
			effect: {
				en: "Does 50 damage times the number of your Pokémon that have the Round attack.",
				fr: "Inflige 50 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280847
	}
}

export default card
