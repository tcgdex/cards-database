import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Nidoking BREAK",
		'fr-fr': "Nidoking TURBO",
		'es-es': "Nidoking TURBO",
		'it-it': "Nidoking TURBO",
		'pt-br': "Nidoking TURBO",
		'de-de': "Nidoking-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 180,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'es-es': "Nidoking",
		'it-it': "Nidoking",
		'pt-br': "Nidoking",
		'de-de': "Nidoking"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Toxic Drill",
				'fr-fr': "Perce Toxique",
				'es-es': "Taladro Tóxico",
				'it-it': "Trapano Tossico",
				'pt-br': "Broca Tóxica",
				'de-de': "Giftiger Bohrer"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 2 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l'altro, metti due segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 2 contadores de danos em vez de 1 naquele Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},
			damage: 120,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 293401,
		tcgplayer: 124059
	}
}

export default card
