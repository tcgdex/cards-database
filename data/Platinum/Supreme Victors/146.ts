import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Rayquaza C",
		fr: "Rayquaza ",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Spirit",
				fr: "Esprit de dragon",
			},
			effect: {
				en: "If Rayquaza C is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza C.",
				fr: "Si Rayquaza  est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts sans le mettre K.O., vous pouvez choisir dans votre pile de défausse une carte Énergie et l'attacher à Rayquaza .",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Final Blowup",
				fr: "Explosion finale",
			},
			effect: {
				en: "Discard all Energy attached to Rayquaza C. Ignore this effect if you have no cards in your hand.",
				fr: "Défaussez toutes les Énergies attachées à Rayquaza . Ignorez cet effet si vous n'avez plus de cartes en main.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
