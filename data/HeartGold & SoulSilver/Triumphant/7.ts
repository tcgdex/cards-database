import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],
	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dimension Transfer",
				fr: "Transfert dimensionnel",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it on top of your deck. This power can’t be used if Porygon-Z is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck. Ce Poké-Power ne peut pas être utilisé si Porygon-Z est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Suspicious Beam β",
				fr: "Rayon β douteux",
			},
			effect: {
				en: "If Porygon-Z has no Rainbow Energy attached to it, Porygon-Z does 20 damage to itself and Porygon-Z is now Confused.",
				fr: "Si aucune Énergie Multicolore n’est attachée à Porygon-Z, Porygon-Z s’inflige 20 dégâts et est maintenant Confus.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
