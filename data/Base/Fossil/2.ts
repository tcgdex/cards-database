import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
		it: "Articuno",
		de: "Arktos"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Freeze Dry",
				fr: "Blocage glacial",
				it: "Ghiaccio Secco",
				de: "Gefriertrocknung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
				it: "Tormenta",
				de: "Blizzard"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. Si c'est pile, cette attaque inflige 10 dégâts à chacun des Pokémon de votre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon qui sont sur un Banc.)",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni a ogni Pokémon nella Panchina del tuo avversario. Se esce croce, questo attacco infligge 10 danni a ogni Pokémon nella tua Panchina (non applicare Debolezza e Resistenza ai Pokémon in Panchina).",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff jedem gegnerischen Pokémon auf der Bank 10 Schadenspunkte zu. Bei „Zahl“ fügt dieser Angriff jedem deiner eigenen Pokémon auf der Bank 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
		fr: "Le légendaire oiseau des glaces. On dit qu'il apparaît aux gens perdus dans les sommets.",
		it: "Leggendario uccello Pokémon. Si dice che appaia come presagio di morte a chi si perde sulle montagne ghiacciate.",
		de: "Ein legendäres Vogel-Pokémon, dem man nachsagt, dass es Todgeweihten erscheint, die sich in Gletschern verirrt haben."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273863,
				tcgplayer: 106518
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273863,
				tcgplayer: 106518
			}
		},
	],
}

export default card
