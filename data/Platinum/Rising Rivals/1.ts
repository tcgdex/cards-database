import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin Niv. 53",
		de: "Arkani"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Flare Condition",
				fr: "Condition éclatante",
				de: "Fackelstellung"
			},
			effect: {
				en: "As long as Arcanine has any Fire Energy attached to it, Arcanine has no Weakness.",
				fr: "Tant qu'Arcanin possède de l'Énergie Fire, il ne possède pas de Faiblesse.",
				de: "Solange an Arkani mindestens 1 -Energie angelegt ist, hat Arkani keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burn Out",
				fr: "Laisser brûler",
				de: "Ausbrennen"
			},
			effect: {
				en: "You may do 30 damage plus 30 more damage. If you do, Arcanine is now Burned.",
				fr: "Vous pouvez infliger 30 dégâts plus 30 dégâts supplémentaires. Arcanin est alors Brûlé.",
				de: "Du kannst mit diesem Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zufügen. Wenn du das machst, ist Arkani jetzt verbrannt."
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
				en: "Flames of Rage",
				fr: "Flammes de rage",
				de: "Wutflammen"
			},
			effect: {
				en: "Discard a Fire Energy attached to Arcanine. This attack does 60 damage plus 10 more damage for each damage counter on Arcanine.",
				fr: "Défaussez une Énergie Fire attachée à Arcanin. Cette attaque inflige alors 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Arcanin.",
				de: "Lege 1 -Energie, die an Arkani angelegt ist, auf deinen Ablagestapel. Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Arkani zu."
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

	thirdParty: {
		cardmarket: 278575,
		tcgplayer: 83585
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
