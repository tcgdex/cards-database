import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Darkness Fan",
				fr: "Ventilateur Obscurité",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 Evolved Pokémon on your opponent's Bench, remove the highest Stage Evolution card from that Pokémon, and put it back into his or her hand. This power can't be used if Shiftry is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Tengalice est votre Pokemon actif, vous pouvez lancer une pièce. Si c'est face, choisissez 1 Pokémon Évolué sur le Banc de votre adversaire, retirez-lui la carte Évolution au niveau le plus élevé et replacez-la dans sa main. Ce pouvoir ne peut pas être utilisé si Tengalice est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Spirit Dance",
				fr: "Danse spirituelle",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
