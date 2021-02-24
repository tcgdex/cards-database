import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		601,
	],
	hp: 140,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Plasma Steel",
				fr: "Acier Plasma",
			},
			effect: {
				en: "Prevent all damage done to your Metal Pokémon by attacks from your opponent's Pokémon-EX.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon Metal par des attaques des Pokémon-EX de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Heavy Bullet",
				fr: "Projectile Lourd",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
