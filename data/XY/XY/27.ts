import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		662,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
				es: "Nitrocarga",
				it: "Nitrocarica",
				pt: "Ataque de Chamas",
				de: "Nitroladung"
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um card de Energia Fire e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Wing",
				fr: "Aile de Feu",
				es: "Ala Ígnea",
				it: "Alafiamma",
				pt: "Asa de Fogo",
				de: "Feuerflügel"
			},

			damage: 30,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 281364
	}
}

export default card
