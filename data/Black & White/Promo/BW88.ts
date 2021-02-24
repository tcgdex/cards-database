import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},
	illustrator: "Illus.＆Direc.The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand-Attack",
				fr: "Jet de Sable",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Slash",
				fr: "Flamme Tranchante",
			},
			effect: {
				en: "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				fr: "Vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
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

	retreat: 1,



}

export default card
