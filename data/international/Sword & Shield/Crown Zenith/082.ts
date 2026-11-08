import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [691],
	set: Set,

	name: {
		'en-us': "Dragalge",
		'fr-fr': "Kravarech",
		'es-es': "Dragalge",
		'it-it': "Dragalge",
		'pt-br': "Dragalge",
		'de-de': "Tandrak"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
		'es-es': "Skrelp",
		'it-it': "Skrelp",
		'pt-br': "Skrelp",
		'de-de': "Algitt"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Rocket Poison",
			'fr-fr': "Poison Express",
			'es-es': "Veneno a Propulsión",
			'it-it': "Velenorazzo",
			'pt-br': "Veneno a Jato",
			'de-de': "Raketengift"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. If this Pokémon evolved from Skrelp during this turn, put 8 damage counters on that Pokémon instead of 1 during Pokémon Checkup.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Si ce Pokémon a évolué de Venalgue pendant ce tour, placez 8 marqueurs de dégâts sur ce Pokémon-là au lieu d'un pendant le Contrôle Pokémon.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Si este Pokémon ha evolucionado de Skrelp durante este turno, pon 8 contadores de daño en vez de 1 en ese Pokémon durante el Chequeo Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Se questo Pokémon si è evoluto da Skrelp durante questo turno, metti otto segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Se este Pokémon evoluiu de Skrelp durante este turno, coloque 8 contadores de dano ao invés de 1 naquele Pokémon durante o Checape Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Wenn sich dieses Pokémon während dieses Zuges aus Algitt entwickelt hat, lege beim Pokémon-Check 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Razor Fin",
			'fr-fr': "Aileron-Rasoir",
			'es-es': "Aleta Afilada",
			'it-it': "Pinnalama",
			'pt-br': "Barbatana Cortante",
			'de-de': "Rasierflosse"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Dragalge uses a poisonous liquid capable of corroding metal to send tankers that enter its territory to the bottom of the sea.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691800,
				tcgplayer: 478222
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691800,
				tcgplayer: 478222
			}
		},
	],
}

export default card
