import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shadow Curse",
				fr: "Ombre maléfique"
			},
			effect: {
				en: "If Gengar would be Knocked Out by damage from an opponent's attack, you may put 3 damage counters on 1 of your opponent's Pokémon.",
				fr: "Si Ectoplasma doit être mis K.O par les dégâts d'une attaque de votre adversaire, vous pouvez placer 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Reaction",
				fr: "Réaction maléfique"
			},
			effect: {
				en: "Put 2 damage counters on your opponent's Pokémon in any way you like. If Gengar has any React Energy cards attached to it, put 4 damage counters instead.",
				fr: "Placez 2 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez. Si Ectoplasma possède des cartes Énergie réaction, placez 4 marqueurs de dégât."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy"
			},

			damage: 60,

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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
