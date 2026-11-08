import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin Niv. 53",
		'de-de': "Arkani"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [59],

	hp: 100,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Flare Condition",
				'fr-fr': "Condition éclatante",
				'de-de': "Fackelstellung"
			},
			effect: {
				'en-us': "As long as Arcanine has any Fire Energy attached to it, Arcanine has no Weakness.",
				'fr-fr': "Tant qu'Arcanin possède de l'Énergie Fire, il ne possède pas de Faiblesse.",
				'de-de': "Solange an Arkani mindestens 1 -Energie angelegt ist, hat Arkani keine Schwäche."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Burn Out",
				'fr-fr': "Laisser brûler",
				'de-de': "Ausbrennen"
			},
			effect: {
				'en-us': "You may do 30 damage plus 30 more damage. If you do, Arcanine is now Burned.",
				'fr-fr': "Vous pouvez infliger 30 dégâts plus 30 dégâts supplémentaires. Arcanin est alors Brûlé.",
				'de-de': "Du kannst mit diesem Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zufügen. Wenn du das machst, ist Arkani jetzt verbrannt."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flames of Rage",
				'fr-fr': "Flammes de rage",
				'de-de': "Wutflammen"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to Arcanine. This attack does 60 damage plus 10 more damage for each damage counter on Arcanine.",
				'fr-fr': "Défaussez une Énergie Fire attachée à Arcanin. Cette attaque inflige alors 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Arcanin.",
				'de-de': "Lege 1 -Energie, die an Arkani angelegt ist, auf deinen Ablagestapel. Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Arkani zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83585,
				cardmarket: 278570
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278570,
				tcgplayer: 83585
			}
		},
	],

}

export default card
