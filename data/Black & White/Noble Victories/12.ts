import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		it: "Accelgor",
		pt: "Accelgor",
		de: "Hydragil"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Acid Spray",
				fr: "Bombe Acide",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280135
	}
}

export default card
