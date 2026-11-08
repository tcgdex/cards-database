import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [962],
	set: Set,

	name: {
		'en-us': "Bombirdier",
		'fr-fr': "Lestombaile",
		'es-es': "Bombirdier",
		'it-it': "Bombirdier",
		'pt-br': "Bombirdier",
		'de-de': "Adebom"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Knickknack Carrying",
			'fr-fr': "Trimballe Bricoles",
			'es-es': "Transporte de Chatarra",
			'it-it': "Trasporto di Cianfrusaglie",
			'pt-br': "Carregando Tranqueira",
			'de-de': "Klimbimtransport"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Outil Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Herramienta Pokémon, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Oggetto Pokémon, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Ferramenta Pokémon no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon-Ausrüstungen, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Clutch",
			'fr-fr': "Serre",
			'es-es': "Embrague",
			'it-it': "Grinfie",
			'pt-br': "Agarramento",
			'de-de': "Greifer"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "nagimiso",

	description: {
		'en-us': "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
	},

	thirdParty: {
        cardmarket: 702433,
        tcgplayer: 488026
    }
}

export default card