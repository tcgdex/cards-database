import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		419,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
		es: "Buizel",
		it: "Buizel",
		pt: "Buizel",
		de: "Bamelin"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rescue",
				fr: "Rescousse",
				es: "Rescate",
				it: "Salvataggio",
				pt: "Resgate",
				de: "Bergen"
			},
			effect: {
				en: "Shuffle 3 Pokémon from your discard pile into your deck.",
				fr: "Mélangez 3 Pokémon de votre pile de défausse avec votre deck.",
				es: "Pon 3 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
				it: "Rimischia tre Pokémon dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 3 Pokémon da sua pilha de descarte no seu baralho.",
				de: "Nimm 3 Pokémon aus deinem Ablagestapel und mische sie in dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Screw Tail",
				fr: "Queue Cloutée",
				es: "Cola Tornillo",
				it: "Avvitacoda",
				pt: "Cauda Parafuso",
				de: "Schraubschwanz"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
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



}

export default card
