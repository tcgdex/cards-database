import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},
	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		662,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
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
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
