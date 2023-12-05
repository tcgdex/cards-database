import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
	},
	illustrator: "Hiromichi Sugiyama",
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

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Burning Energy",
				fr: "Énergie brûlante",
				de: "Burning Energy"
			},
			effect: {
				en: "Once during your turn (before you attack), you may turn all basic Energy attached to all of your Pokémon into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez changer toutes les Énergies de base attachées à tous vos Pokémon en Énergie  pour le reste du tour. Ce pouvoir ne peut pas être utilisé si Dracaufeu est affecté par un État spécial.",
				de: "Once during your turn (before your attack), you may turn all basic Energy attached to all of your Pokémonn into  Energy for the rest of the turn. This power can´t be used if Charizard is affected by a Special Condition"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Scorching Whirlwind",
				fr: "Tourbillon brûlant",
				de: "Scorching Whirlwind"
			},
			effect: {
				en: "Flip 2 coins. If 1 of them is tails, discards 3 Energy cards attached to Charizard. If both of them are tails, discard all Energy cards attached to Charizard.",
				fr: "Lancez 2 pièces. Si vous obtenez 1 pile, défaussez-vous de 2 cartes Énergie attachées à Dracaufeu. Si vous obtenez 2 piles, défaussez-vous de toutes les cartes Énergie attachées à Dracaufeu.",
				de: "Flip 2 coins. If 1 of them is tails, discard 2Energy cards attached to Charizard. If both are tails, discard all Energy cards attached to Charizard."
			},
			damage: 120,

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
