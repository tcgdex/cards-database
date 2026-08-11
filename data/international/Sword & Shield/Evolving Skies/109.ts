import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
		'es-es': "Salamence",
		'it-it': "Salamence",
		'pt-br': "Salamence",
		'de-de': "Brutalanda"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Stage2",
	illustrator: "kodama",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Intimidating Roar",
			'fr-fr': "Rugissement Intimidant",
			'es-es': "Rugido Intimidatorio",
			'it-it': "Spaventaruggito",
			'pt-br': "Intimidating Roar",
			'de-de': "Einschüchterndes Gebrüll"
		},

		effect: {
			'en-us': "Once during your turn, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez demander à votre adversaire d'échanger son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Una vez durante tu turno, puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Una sola volta durante il tuo turno, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Once during your turn, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Fierce Dragon",
			'fr-fr': "Dragon Féroce",
			'es-es': "Dragón Feroz",
			'it-it': "Drago Feroce",
			'pt-br': "Fierce Dragon",
			'de-de': "Wütender Drache"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	dexId: [373],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'de-de': "Draschel"
	},

	description: {
		'en-us': "Thanks to its fervent wishes, the cells in its body finally mutated, and at last it has its heart's desire—wings."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574157,
				tcgplayer: 246909
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574157,
				tcgplayer: 246909
			}
		},
	],
}

export default card
