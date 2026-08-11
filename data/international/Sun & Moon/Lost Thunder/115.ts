import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Second Strike",
				'fr-fr': "Deuxième Coup",
				'es-es': "Segundo Golpe",
				'it-it': "Secondocolpo",
				'pt-br': "Segundo Golpe",
				'de-de': "Sekundärschlag"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon already has 3 or more damage counters on it, this attack does 70 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà 3 marqueurs de dégâts ou plus, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene 3 o más contadores de daño sobre él, este ataque hace 70 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha già tre o più segnalini danno, questo attacco infligge 70 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já tiver 3 ou mais contadores de dano nele, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners bereits 3 oder mehr Schadensmarken liegen, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Born deep underground, it comes aboveground and becomes a pupa once it has finished eating the surrounding soil.",
	},

	thirdParty: {
		cardmarket: 365751,
		tcgplayer: 178928
	}
}

export default card
