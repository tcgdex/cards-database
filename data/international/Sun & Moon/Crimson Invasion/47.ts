import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
				'es-es': "Maquinación",
				'it-it': "Congiura",
				'pt-br': "Trama Maldosa",
				'de-de': "Ränkeschmied"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Severe Poison",
				'fr-fr': "Poison Violent",
				'es-es': "Veneno Grave",
				'it-it': "Maloveleno",
				'pt-br': "Veneno Forte",
				'de-de': "Pures Gift"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 4 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti quattro segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 4 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "For some reason, only females have been found. It creates a reverse harem of male Salandit that it lives with.",
	},

	thirdParty: {
		cardmarket: 311897,
		tcgplayer: 149070
	}
}

export default card
