import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Castform",
		fr: "Morphéo",
		es: "Castform",
		it: "Castform",
		pt: "Castform",
		de: "Formeo"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Weather Teller",
				fr: "Cartomancien",
				es: "Predicción del Clima",
				it: "Meteomante",
				pt: "Adivinho do Clima",
				de: "Wettervorhersage"
			},
			effect: {
				en: "Search your deck for up to 2 Stadium cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Stade dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Estadio, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Stadio, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Estádio no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Stadionkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d’Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297557
	}
}

export default card
