import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Moltres & Zapdos & Articuno GX",
		fr: "Sulfura, Électhor et Artikodin-GX",
		de: "Lavados & Zapdos & Arktos-GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [146, 145, 144],
	hp: 300,

	types: [
		"Colorless",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Trinity Burn",
				fr: "Triple Brûlure",
				de: "Dreiheitsbrand"
			},

			damage: 210,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sky Legends GX",
				fr: "Légendes Célestes GX",
				de: "Legenden der Lüfte GX"
			},
			effect: {
				en: "Shuffle this Pokémon and all cards attached to it into your deck. If this Pokémon has at least 1 extra Fire, Water, and Lightning Energy attached to it (in addition to this attack’s cost), this attack does 110 damage to 3 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck. Si au moins une Énergie Fire, Water et Lightning supplémentaire sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 110 dégâts à 3 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Mische dieses Pokémon und alle an es angelegten Karten in dein Deck. Wenn an dieses Pokémon mindestens 1 extra {R}-, {W}- und {L}-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 3 Pokémon deines Gegners 110 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 396672,
		tcgplayer: 197726
	}
}

export default card
