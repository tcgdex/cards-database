import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
		de: "Sarzenia"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Ultrigaria",
	},

	stage: "Stage2",

	attacks: [
		{

			name: {
				en: "Burning Scent",
				fr: "Odeur de brûlé",
				de: "Brennender Duft"
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned. Before applying these effects, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Avant d'appliquer ces effets, vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Brûlé et Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt und vergiftet. Bevor diese Effekte zugefügt werden, kannst du 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners austauschen. Das neue Verteidigende Pokémon ist jetzt verbrannt und vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Dissolve",
				fr: "Élimination d'Énergie",
				de: "Energie-Auflösung"
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon at the end of your opponent's next turn.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
				de: "Lege am Ende des nächsten Zuges deines Gegners 1 am Verteidigenden Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 3,

	description: {
		fr: "Sa bouche sécrète un fluide à l'odeur du miel, qui s'avère être un acide extrêmement corrosif."
	},

	thirdParty: {
		cardmarket: 278193,
		tcgplayer: 90364
	}
}

export default card
