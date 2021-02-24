import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Radiance",
				fr: "Rayonnement",
			},
			effect: {
				en: "If Electrode is your Active Pokémon and is damaged by an opponent's attack (even if Electrode is Knocked Out), put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Si Electrode est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Electrode est mis K.O), placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Low Current",
				fr: "Bas courant",
			},
			effect: {
				en: "If Electrode was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si une attaque a infligé des dégâts à Electrode lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
