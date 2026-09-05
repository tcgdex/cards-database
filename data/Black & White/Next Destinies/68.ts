import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		620,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
		de: "Lin-Fu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Haul In",
				fr: "Mainmise",
				de: "Einziehen"
			},
			effect: {
				en: "Search your deck for 2 Pokémon Tool cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 2 Pokémon-Ausrüstungen, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
				de: "Meditation"
			},
			effect: {
				en: "Does 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They use the long fur on their arms as a whip to strike their opponents.",
		de: "Es geht seinen Gegnern ans Leder, indem es ihnen mit dem langen Fell seiner Arme wie mit einer Peitsche Hiebe verpasst."
	},

	thirdParty: {
		cardmarket: 280293,
		tcgplayer: 87441
	}
}

export default card
