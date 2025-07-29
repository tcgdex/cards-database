import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		736,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electrical Signal",
				fr: "Signal Électrique",
				es: "Señal Eléctrica",
				it: "Segnale Elettrico",
				pt: "Sinal Elétrico",
				de: "Elektrisches Signal"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Pokémon Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Lightning, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Lightning, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Pokémon Lightning no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Lightning-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
				es: "Puño Tirabuzón",
				it: "Pugno Rotante",
				pt: "Soco Saca-rolha",
				de: "Korkenzieherhieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 372311
	}
}

export default card
