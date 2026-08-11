import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		fr: "Terracruel",
		en: "Toedscruel",
		es: "Toedscruel",
		it: "Toedscruel",
		pt: "Toedscruel",
		de: "Tenterra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Terracool",
		en: "Toedscool",
		es: "Toedscool",
		it: "Toedscool",
		pt: "Toedscool",
		de: "Tentagra"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Bataille",
			en: "Beat",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Double Fouet",
			en: "Double Whip",
			es: "Doble Latigazo",
			it: "Doppiafrustata",
			pt: "Chicote Duplo",
			de: "Doppelpeitsche"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "These Pokémon gather into groups and form colonies deep within forests. They absolutely hate it when strangers approach.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725199,
				tcgplayer: 509868,
				cardtrader: 255804
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725199,
				tcgplayer: 509868,
				cardtrader: 255804
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
