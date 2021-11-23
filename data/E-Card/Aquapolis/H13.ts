import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol"
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fluff",
				fr: "Coton"
			},
			effect: {
				en: "During your opponent's turn, if Jumpluff would be damaged or affected by an opponent's attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).",
				fr: "Pendant le tour de votre adversaire, si Cotovol devait subir des dégâts ou être affecté par une attaque de l'adversaire et s'il a déjà au moins un marqueur de dégâts sur lui, lancez une pièce. Si c'est face, prévenez tous les effets de cette attaque (y compris les dégâts)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Cotton Punch",
				fr: "Poing coton"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
