import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Precognitive Aura",
				fr: "Aura Prémonitoire",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Garchomp in play, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez Carchacrok en jeu, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Missile Jab",
				fr: "Coup Propulsé",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
