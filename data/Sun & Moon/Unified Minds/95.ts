import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		681,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Durable Blade",
				fr: "Lame Résistante",
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an opponent's attack, put it into your hand instead of the discard pile. (Discard all cards attached to it.)",
				fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, placez-le dans votre main plutôt que dans votre pile de défausse. (Défaussez toutes les cartes qui lui sont attachées.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trash Slash",
				fr: "Déchets Déchiquetés",
			},
			effect: {
				en: "This attack does 10 damage for each Item card in your discard pile. You can't do more than 130 damage in this way.",
				fr: "Cette attaque inflige 10 dégâts pour chaque carte Objet dans votre pile de défausse. Vous ne pouvez pas infliger plus de 130 dégâts de cette façon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
