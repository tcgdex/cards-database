import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Conductivity",
				fr: "Conductivité",
			},
			effect: {
				en: "Whenever your opponent attaches an Energy card from his or her hand to 1 of his or her Pokémon, put 1 damage counter on that Pokémon.",
				fr: "Lorsque votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, appliquez un marqueur de dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Crush",
				fr: "Écras’éclair",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage. If tails, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si c’est pile, défaussez-vous d’une carte Énergie attachée au Pokémon Défenseur.",
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
