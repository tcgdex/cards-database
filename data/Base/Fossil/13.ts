import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		de: "Sleimok"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Toxic Gas",
				fr: "Puanteur",
				de: "Giftgas"
			},
			effect: {
				en: "Ignore all Pokémon Powers other than Toxic Gases. This power stops working while Muk is Asleep, Confused, or Paralyzed.",
				fr: "Ignorez tout pouvoir Pokémon autre que Puanteur. L'effet de ce pouvoir cesse lorsque Grotadmorv est Endormi, Confus ou Paralysé.",
				de: "Ignoriere alle Pokémon-Power außer den Giftgasen. Diese Fähigkeit verliert ihre Wirkung, solange Sleimok schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],

			name: {
				en: "Sludge",
				fr: "Détritus",
				de: "Schlammbad"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 30
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
		fr: "Il est recouvert d'une épaisse couche toxique. Il laisse une trace empoisonnée."
	},


	variants: [
		{
			type: "holo",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273874,
				tcgplayer: 44422
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273874,
				tcgplayer: 44422
			}
		},
	]
}

export default card
