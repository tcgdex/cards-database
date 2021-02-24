import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Infernape",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Blaze Dance",
				fr: "Danse incendiaire",
			},
			effect: {
				en: "Once during your turn (before your attack), when you play Infernape from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Simiabraz de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck jusqu'à 4 cartes Énergie Fire et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Close Combat",
				fr: "Combat rapproché",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Infernape by attacks is increased by 30 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Simiabraz par des attaques sont augmentés de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spreading Fire",
				fr: "Feu rampant",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Infernape and this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fire attachées à Simiabraz et cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],





}

export default card
