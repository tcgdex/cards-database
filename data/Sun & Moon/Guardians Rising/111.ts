import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	stage: "Stage2",

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
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Loop-the-Loop",
				fr: "Looping",
				es: "Vuelo Invertido",
				it: "Giro della Morte",
				pt: "Looping",
				de: "Looping"
			},
			effect: {
				en: "Put all Energy attached to this Pokémon into your hand.",
				fr: "Placez toutes les Énergies attachées à ce Pokémon dans votre main.",
				es: "Pon todas las Energías unidas a este Pokémon en tu mano.",
				it: "Metti tutte le Energie assegnate a questo Pokémon nella tua mano.",
				pt: "Coloque todas as Energias ligadas a este Pokémon na sua mão.",
				de: "Nimm alle an dieses Pokémon angelegten Energien auf deine Hand."
			},
			damage: 90,

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

	retreat: 0
}

export default card
