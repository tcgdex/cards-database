import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
		es: "Rayquaza",
		it: "Rayquaza",
		pt: "Rayquaza",
		de: "Rayquaza"
	},

	illustrator: "so-taro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [384],

	hp: 130,

	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Jaw Lock",
				fr: "Croque Fort",
				es: "Bloqueo de Mandíbulas",
				it: "Serrafauci",
				pt: "Travamento de Mandíbula",
				de: "Kiefersperre"
			},
			damage: 30,
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon in difesa non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
		},
		{
			cost: ["Fire", "Lightning", "Colorless"],
			name: {
				en: "Dragon Pulse",
				fr: "Draco-Choc",
				es: "Pulso Dragón",
				it: "Dragopulsar",
				pt: "Pulso do Dragão",
				de: "Drachenpuls"
			},
			damage: 120,
			effect: {
				en: "Discard the top 2 cards of your deck.",
				fr: "Défaussez les 2 cartes du dessus de votre deck.",
				es: "Descarta las 2 primeras cartas de tu baraja.",
				it: "Scarta le prime due carte del tuo mazzo.",
				pt: "Descarte as 2 cartas de cima do seu baralho.",
				de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

