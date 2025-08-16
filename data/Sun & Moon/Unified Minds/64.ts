import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		602,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Generate Electricity",
				fr: "Générateur Électrique",
				es: "Generar Electricidad",
				it: "Generatore Elettrico",
				pt: "Gerar Eletricidade",
				de: "Elektrogenerator"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Lightning no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388137,
		tcgplayer: 194990
	}
}

export default card
