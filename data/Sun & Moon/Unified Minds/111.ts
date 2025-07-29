import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth",
		de: "Relicanth"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Deep Sea Boring",
				fr: "Forage Abyssal",
				es: "Perforación en Alta Mar",
				it: "Scavabissi",
				pt: "Escavação no Mar Profundo",
				de: "Tiefseebohrung"
			},
			effect: {
				en: "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Entrenador, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Treinador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
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
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388357
	}
}

export default card
