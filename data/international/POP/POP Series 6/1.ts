import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Bastiodon",
		'fr-fr': "Bastiodon"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [411],

	hp: 130,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Protective Wall",
				'fr-fr': "Mur protecteur"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
				'fr-fr': "Prévenez tous les dégâts infligés à vos Pokémon de Banc par des attaques de votre adversaire."
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
				'en-us': "Anger Revenge",
				'fr-fr': "Vengeance furieuse"
			},
			effect: {
				'en-us': "If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si des dégâts ont été infligés à Bastiodon par une attaque lors du dernier tour de votre adversaire, cette attaque inflige 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	description: {
		'en-us': "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries."
	},

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83735,
				cardmarket: 277886
			},
		},
	],

}

export default card
