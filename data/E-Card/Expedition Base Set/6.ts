import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Dracaufeu",
		de: "Glurak"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Happy Healing",
				fr: "Énergie brûlante",
				de: "Burning Energy"
			},
			effect: {
				en: "Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can't be used if Blissey is affected by a Special Condition.",
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
				en: "Smash Bomber",
				fr: "Tourbillon brûlant",
				de: "Scorching Whirlwind"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 1 pile, défaussez-vous de 2 cartes Énergie attachées à Dracaufeu. Si vous obtenez 2 piles, défaussez-vous de toutes les cartes Énergie attachées à Dracaufeu.",
				de: "Flip 2 coins. If 1 of them is tails, discard 2Energy cards attached to Charizard. If both are tails, discard all Energy cards attached to Charizard."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84183,
				cardmarket: 274881
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
