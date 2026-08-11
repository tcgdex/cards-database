import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Windy Mischief",
				'fr-fr': "Espièglerie Venteuse",
				'es-es': "Jugarreta Torbellino",
				'it-it': "Vento Birichino",
				'pt-br': "Travessura Ventosa",
				'de-de': "Windiges Unheil"
			},
			effect: {
				'en-us': "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
				'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
				'es-es': "Mueve todos los contadores de daño de 1 de tus Pokémon en Banca al Pokémon Activo de tu rival.",
				'it-it': "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina al Pokémon attivo del tuo avversario.",
				'pt-br': "Mova todos os marcadores de danos acima de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente.",
				'de-de': "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-Boulé",
				'es-es': "Placaje Giro",
				'it-it': "Rollazione",
				'pt-br': "Golpe de Colisão Rolante",
				'de-de': "Rolltackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.",
	},

	thirdParty: {
		cardmarket: 284237,
		tcgplayer: 101478
	}
}

export default card
