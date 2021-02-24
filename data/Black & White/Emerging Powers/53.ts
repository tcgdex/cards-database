import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		526,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Shear",
				fr: "Prospection",
			},
			effect: {
				en: "Discard the top 5 cards of your deck. If any of those cards are Fighting Energy cards, attach them to this Pokémon.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fighting, attachez-les à ce Pokémon.",
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
				en: "Rock Bullet",
				fr: "Fronde",
			},
			effect: {
				en: "Does 20 more damage for each Fighting Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Fighting attachée à ce Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
