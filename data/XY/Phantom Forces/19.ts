import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Lumineon",
		fr: "Luminéon",
		es: "Lumineon",
		it: "Lumineon",
		pt: "Lumineon",
		de: "Lumineon"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		457,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Finneon",
		fr: "Écayon",
		es: "Finneon",
		it: "Finneon",
		pt: "Finneon",
		de: "Finneon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Neon Sign",
				fr: "Appel Lumineux",
				es: "Señal de Neón",
				it: "Segnale Neon",
				pt: "Placa de Neon",
				de: "Leuchtzeichen"
			},
			effect: {
				en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure no seu baralho até 2 Pokémon, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d'Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
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
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281823
	}
}

export default card
