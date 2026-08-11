import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [454],
	set: Set,

	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Masakazu Fukuda",

	description: {
		'en-us': "It booms out a victory croak when its prey goes down in defeat. This Pokémon and Seismitoad are related species."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Severe Poison",
			'fr-fr': "Poison Violent",
			'de-de': "Pures Gift",
			'es-es': "Veneno Grave",
			'pt-br': "Veneno Forte",
			'it-it': "Maloveleno"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 4 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 4 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 4 contadores de daño en ese Pokémon en vez de 1.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 4 contadores de dano ao invés de 1 naquele Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti quattro segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Magnum Punch",
			'fr-fr': "Poing Magnum",
			'de-de': "Magnum-Schlag",
			'es-es': "Puño Magnum",
			'pt-br': "Soco Magnum",
			'it-it': "Superpugno"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582794,
				tcgplayer: 253380
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582794,
				tcgplayer: 253380
			}
		},
	],
}

export default card
