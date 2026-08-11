import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [207],
	set: Set,

	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Toxic",
			'fr-fr': "Toxik",
			'es-es': "Tóxico",
			'it-it': "Tossina",
			'pt-br': "Tóxico",
			'de-de': "Toxin"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 2 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 2 contadores de daño en vez de uno en ese Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato. Metti due segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Envenenado. Durante o Checape Pokémon, coloque 2 contadores de dano ao invés de 1 naquele Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt vergiftet. Lege beim Pokémon-Check 2 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It flies straight at its target's face, then clamps down on the startled victim to inject poison.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740588,
				tcgplayer: 523758,
				cardtrader: 265205
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740588,
				tcgplayer: 523758,
				cardtrader: 265205
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	
}

export default card
