import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		de: "Giratina"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Let Loose",
				fr: "Libérer",
				de: "Let Loose"
			},
			effect: {
				en: "Once during your turn, when you put Giratina from your hand onto your Bench, you may use this power. Each player shuffles his or her hand into his or her deck and draws up to 4 cards. (You draw your cards first.)",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Giratina de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Chaque joueur mélange sa main à son deck et pioche jusqu'à 4 cartes. (Vous piochez vos cartes en premier.)",
				de: "Once during your turn, when you put Giratina from your hand onto your Bench, you may use this power. Eac player shuffles his or her hand into his or her deck and draws up to 4 cards. (You draw your cards first.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Earth Power",
				fr: "Telluriforce",
				de: "Earth Power"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Flip 2 coins. This attack does 10 damage times the number of heads to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278430,
		tcgplayer: 85737
	},

	variants:[
		{
			type:"holo"
		},
		{
			type:"reverse"
		}
	]
}

export default card
