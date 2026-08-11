import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Infernape",
		'fr-fr': "Simiabraz",
		'es-es': "Infernape",
		'it-it': "Infernape",
		'pt-br': "Infernape",
		'de-de': "Panferno"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		392,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flaming Fighter",
				'fr-fr': "Combattant Incandescent",
				'es-es': "Luchador Fogoso",
				'it-it': "Lottatore Fiammeggiante",
				'pt-br': "Lutador Flamejante",
				'de-de': "Flammenkämpfer"
			},
			effect: {
				'en-us': "Put 6 damage counters instead of 2 on your opponent’s Burned Pokémon between turns.",
				'fr-fr': "Placez 6 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
				'es-es': "Pon 6 contadores de daño en vez de 2 en el Pokémon Quemado de tu rival entre turnos.",
				'it-it': "Tra un turno e l’altro, metti sei segnalini danno invece di due sul Pokémon bruciato del tuo avversario.",
				'pt-br': "Coloque 6 contadores de dano ao invés de 2 no Pokémon Queimado do seu oponente entre as vezes de jogar.",
				'de-de': "Lege zwischen den Zügen 6 Schadensmarken anstelle von 2 Schadensmarken auf das verbrannte Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Burst Punch",
				'fr-fr': "Poing d’Enfer",
				'es-es': "Puño Explosivo",
				'it-it': "Fiammatapugno",
				'pt-br': "Soco Rajada",
				'de-de': "Explosionshieb"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 50,

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
		'en-us': "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.",
	},

	thirdParty: {
		cardmarket: 355577,
		tcgplayer: 165711
	}
}

export default card
