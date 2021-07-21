import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
		es: "Meowth de Alola",
		it: "Meowth di Alola",
		pt: "Meowth de Alola",
		de: "Alola-Mauzi"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Nasty Plot",
				fr: "Machination",
				es: "Maquinación",
				it: "Congiura",
				pt: "Trama Maldosa",
				de: "Ränkeschmied"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Lancez une pièce. Si c’est face, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Lancia una moneta. Se testa, cerca una carta nel tuo mazzo e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Jogue 1 moeda. Se sair cara, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 10,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1
}

export default card
