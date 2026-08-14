import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
		es: "Stoutland",
		it: "Stoutland",
		pt: "Stoutland",
		de: "Bissbark"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
		de: "Terribark"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Special Fang",
				fr: "Croc Spécial",
				de: "Spezial-Reißzähne"
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached to it, this attack does 40 more damage.",
				fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn an dieses Pokémon bereits Spezial-Energie angelegt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ferocious Bellow",
				fr: "Grognement Féroce",
				de: "Wildes Kläffen"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 30 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 30 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 30 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It rescues people stranded by blizzards in the mountains. Its shaggy fur shields it from the cold.",
		de: "Es rettet Menschen, die aufgrund eines Schneesturmes im Gebirge festsitzen. Sein langes Fell schützt es vor Kälte."
	},

	thirdParty: {
		cardmarket: 280416,
		tcgplayer: 89571
	}
}

export default card
