import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Morpeko",
		'fr-fr': "Morpeko",
		'es-es': "Morpeko",
		'it-it': "Morpeko",
		'pt-br': "Morpeko",
		'de-de': "Morpeko"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Attack the Wound",
				'fr-fr': "Défi de la Plaie",
				'es-es': "Ataque a la Herida",
				'it-it': "Attacco Spietato",
				'pt-br': "Atacar a Ferida",
				'de-de': "Wundschmerz"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 50 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity."
	},

	dexId: [877],

	thirdParty: {
		cardmarket: 436519,
		tcgplayer: 208376
	}
}

export default card
