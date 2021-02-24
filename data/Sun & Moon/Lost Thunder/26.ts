import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},
	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		267,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Skill Dive",
				fr: "Plongeon Contrôlé",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Butterfly Edge",
				fr: "Lame Papillon",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this attack, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
