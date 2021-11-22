import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Collect Fire",
				fr: "Quête du feu"
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for 2 Fire Energy cards and attach them to Charizard (1 if there is only 1).",
				fr: "Lancez une pièce. Si c'est face, cherchez dans votre pile de défausse deux cartes Énergie  (ou une s'il n'y en a qu'une) et attachez-les à Dracaufeu."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Pillar",
				fr: "Colonne de flamme"
			},
			effect: {
				en: "You may discard a Fire Energy card attached to Charizard. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Dracaufeu. Vous pouvez alors choisir un des Pokémon de Banc de votre adversaire et lui infliger 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
