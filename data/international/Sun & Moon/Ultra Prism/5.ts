import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'es-es': "Roserade",
		'it-it': "Roserade",
		'pt-br': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Inviting Poison",
				'fr-fr': "Poison Tentant",
				'es-es': "Veneno Cautivador",
				'it-it': "Veleno Invitante",
				'pt-br': "Veneno Convidativo",
				'de-de': "Einladendes Gift"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Poisoned.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Empoisonné.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Envenenado.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene avvelenato.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Envenenado.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Flower Tornado",
				'fr-fr': "Floramixeur",
				'es-es': "Tornado Floral",
				'it-it': "Vortifiore",
				'pt-br': "Tornado de Flores",
				'de-de': "Blumenmixer"
			},
			effect: {
				'en-us': "Move any number of Grass Energy from your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous le voulez sur vos autres Pokémon, de la manière que vous voulez.",
				'es-es': "Mueve cualquier cantidad de Energías Grass de tus Pokémon a tus otros Pokémon de la manera que desees.",
				'it-it': "Distribuisci a piacimento tutte le Energie Grass assegnate ai tuoi Pokémon.",
				'pt-br': "Mova qualquer número de Energia Grass dos seus Pokémon para outros Pokémon seus como desejar.",
				'de-de': "Verschiebe beliebig viele Grass-Energien von deinen Pokémon beliebig auf deine anderen Pokémon."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.",
	},

	thirdParty: {
		cardmarket: 315937,
		tcgplayer: 157622
	}
}

export default card
