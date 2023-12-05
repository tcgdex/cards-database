import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		de: "Seedraking"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
		fr: "Seemon",
	},
	stage: "Stage2",


	attacks: [
		{

			name: {
				en: "Aqua Stream",
				fr: "Aqua-courant",
				de: "Aquastrom"
			},
			effect: {
				en: "Search your discard pile for as many Water Energy cards as you like, show them to your opponent, and this attack does 10 damage for each Water Energy card you chose. Put those cards on top of your deck. Shuffle your deck afterward.",
				fr: "Cherchez dans votre pile de défausse autant de cartes Énergie Water que vous le voulez et montrez-les à votre adversaire. Cette attaque inflige 10 dégâts pour chaque Énergie Water choisie. Placez ces cartes au-dessus de votre deck. Ensuite, mélangez votre deck.",
				de: "Durchsuche deinen Ablagestapel nach beliebig vielen -Energiekarten und zeige sie deinem Gegner. Dieser Angriff fügt 10 Schadenspunkte für jede auf diese Weise vorgezeigte -Energiekarte zu. Lege alle diese Energiekarten auf dein Deck. Mische dein Deck danach."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Pump",
				fr: "Draco-pompe",
				de: "Drachenpumpe"
			},
			effect: {
				en: "You may discard 2 cards from your hand. If you do, this attack does 40 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser 2 cartes de votre main. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires et inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Du kannst 2 Karten von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card
