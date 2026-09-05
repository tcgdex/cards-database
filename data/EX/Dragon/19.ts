import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
		de: "Brutalanda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [373],

	hp: 100,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
		de: "Draschel"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
				fr: "Croc intimidant",
				de: "Beeindruckende Fangzähne"
			},
			effect: {
				en: "As long as Salamence is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tant que Drattak est votre Pokémon Actif, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "Solange Brutalanda dein Aktives Pokémon ist, wird aller Schaden, der deinen Pokémon durch gegnerische Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Flame",
				fr: "Flamme de dragon",
				de: "Drachenflamme"
			},
			effect: {
				en: "You may discard an Energy card attached to Salamence. If you do, this attack does 40 damage plus 20 more damage.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Drattak. Cette attaque inflige alors 60 dégâts.",
				de: "Du kannst 1 Energiekarte, die an Brutalanda angelegt ist, auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],


	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88896,
				cardmarket: 280584
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88896,
				cardmarket: 280584
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 213023,
				cardmarket: 280584
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			stamp: ["winner"],
			thirdParty: {
				tcgplayer: 213024,
				cardmarket: 280584
			},
		},
	],

}

export default card
