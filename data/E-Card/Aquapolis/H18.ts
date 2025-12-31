import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
		de: "Nidoking"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Nidorino",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Earth Rage",
				fr: "Frénésie-terre",
				de: "Earth Rage"
			},
			effect: {
				en: "Once during your turn (before your attack), if Nidoking is your Active Pokémon, you may flip a coin. If heads, put a damage counter on each of your opponent's Benched Pokémon. This power can't be used if Nidoking is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Nidoking est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, placez un marqueur de dégâts sur chacun des Pokémon du Banc de votre adversaire. Ce pouvoir ne peut pas être utilisé si Nidoking est affecté par un État spécial.",
				de: "Once during your turn (before your attack), if Nidoking is your Active Pokémon, you may flip a coin. If heads, put a damage counter on each of your opponent's Benched Pokémon. This power can't be used if Nidoking is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Horn",
				fr: "Corne géante",
				de: "Giant Horn"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275043,
		tcgplayer: 87692
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
