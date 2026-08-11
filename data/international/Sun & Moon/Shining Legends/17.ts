import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Incineroar",
		'fr-fr': "Félinferno",
		'es-es': "Incineroar",
		'it-it': "Incineroar",
		'pt-br': "Incineroar",
		'de-de': "Fuegro"
	},

	illustrator: "Emi Ando",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		727,
	],

	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Profane Punch",
				'fr-fr': "Poing Vulgaire",
				'es-es': "Puñetazo Profano",
				'it-it': "Pugno Ribelle",
				'pt-br': "Soco Profano",
				'de-de': "Ruchloshieb"
			},
			effect: {
				'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 80 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 80 puntos de daño más.",
				'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare Blitz",
				'fr-fr': "Boutefeu",
				'es-es': "Envite Ígneo",
				'it-it': "Fuococarica",
				'pt-br': "Blitz de Labaredas",
				'de-de': "Flammenblitz"
			},
			effect: {
				'en-us': "Discard all Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie Fire de ce Pokémon.",
				'es-es': "Descarta todas las Energías Fire de este Pokémon.",
				'it-it': "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte todas as Energias Fire deste Pokémon.",
				'de-de': "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon has a violent, selfish disposition. If it's not in the mood to listen, it will ignore its Trainer's orders with complete nonchalance.",
	},

	thirdParty: {
		cardmarket: 302155,
		tcgplayer: 146670
	}
}

export default card
