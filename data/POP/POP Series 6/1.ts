import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Bastiodon",
		fr: "Bastiodon"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		411,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Protective Wall",
				fr: "Mur protecteur"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent’s attacks.",
				fr: "Prévenez tous les dégâts infligés à vos Pokémon de Banc par des attaques de votre adversaire."
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
				en: "Anger Revenge",
				fr: "Vengeance furieuse"
			},
			effect: {
				en: "If Bastiodon was damaged by an attack during your opponent’s last turn, this attack does 40 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si des dégâts ont été infligés à Bastiodon par une attaque lors du dernier tour de votre adversaire, cette attaque inflige 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
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
		en: "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries."
	},

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277886,
		tcgplayer: 83735
	}
}

export default card
