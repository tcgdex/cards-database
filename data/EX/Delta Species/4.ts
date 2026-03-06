import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Espeon δ",
		fr: "Mentali δ",
		de: "Psiana"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 70,

	types: [
		"Psychic",
		"Metal",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Heal",
				fr: "Guérison Delta",
				de: "Delta-Heilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon that has δ on its card. You can't use more than 1 Delta Heal Poké-Power each turn. This power can't be used if Espeon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 1 marqueur de dégât à chacun de vos Pokémon possédant le symbole δ. Vous ne pouvez pas utiliser plus d'1 Poké-Power Guérison Delta par tour. Ce pouvoir ne peut pas être utilisé si Mentali est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Schadensmarke von jedem deiner Pokémon nehmen, auf dem ein δ zu sehen ist. Du kannst pro Runde nur 1 Delta-Heilung Poké-Power einsetzten. Diese Poké-Power kann nicht benutzt werden, falls Psiana von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psychoschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276767
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
