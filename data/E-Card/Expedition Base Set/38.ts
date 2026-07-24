import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Papilusion",
		de: "Smettbo"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [73],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Strange Tentacles",
				fr: "Poudre miraculeuse",
				de: "Miraculous Powder"
			},
			effect: {
				en: "Once during your turn (before your attack), as long as the number of Energy cards attached to the Defending Pokémon is less than the number of Energy cards attached to your Active Pokémon, you may choose an Energy card, if any, in your opponent's discard pile and attach it to the Defending Pokémon. This power can't be used if Tentacruel is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez annuler tous les États spéciaux sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Papilusion est affecté par un État spécial.",
				de: "Once during your turn (before your attack), you may remove all Special Conditions from your Active Pokémon. This power can't be used if Butterfree is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Spirale",
				de: "Spiral Drain"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégâts sur Papilusion.",
				de: "Flip a coin. If heads, remove 2 damage counters from Butterfree."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84064,
				cardmarket: 274880
			},
		},
		{
			type: "reverse",
		}
	],
	retreat: 0,
}

export default card
