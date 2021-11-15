import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Flareon δ",
		fr: "Pyroli δ ESPÈCES DELTA"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 70,
	types: [
		"Fire",
		"Metal",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Search",
				fr: "Recherche Delta"
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to Flareon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Pyroli. Ensuite, mélangez votre deck."
			},
			damage: 10,

		},
		{
			name: {
				en: "Return Burn",
				fr: "Retour de brûlure"
			},

			effect: {
				en: "You may return an Energy card attached to Flareon to your hand. If you do, the Defending Pokémon is now Burned.",
				fr: "Vous pouvez reprendre dans votre main une carte Énergie attachée à Pyroli. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé."
			},

			damage: 50,
			cost: ["Fire", "Metal", "Colorless"]
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
