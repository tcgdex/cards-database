import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		'en-us': "Galarian Slowking VMAX",
		'fr-fr': "Roigada de Galar VMAX",
		'es-es': "Slowking de Galar VMAX",
		'it-it': "Slowking di Galar VMAX",
		'pt-br': "Slowking de Galar VMAX",
		'de-de': "Galar-Laschoking VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Max Toxify",
			'fr-fr': "Toxomax",
			'es-es': "Maxitoxicidad",
			'it-it': "Dynatossicità",
			'pt-br': "Intoxicação Max",
			'de-de': "Dyna-Vergiftung"
		},

		damage: 10,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 12 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 12 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 12 contadores de daño en ese Pokémon en vez de 1.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti 12 segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 12 contadores de dano ao invés de 1 naquele Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 12 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,


	stage: "VMAX",
	illustrator: "5ban Graphics",

	evolveFrom: {
		'en-us': "Galarian Slowking V",
		'fr-fr': "Roigada de Galar-V",
		'es-es': "Slowking de Galar V",
		'it-it': "Slowking di Galar-V",
		'pt-br': "Slowking de Galar V",
		'de-de': "Galar-Laschoking-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567315,
				tcgplayer: 241774
			}
		},
	],
}

export default card
