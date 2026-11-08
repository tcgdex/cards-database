import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Alolan Muk GX",
		'fr-fr': "Grotadmorv d’Alola GX",
		'es-es': "Muk de Alola GX",
		'it-it': "Muk di Alola GX",
		'pt-br': "Muk de Alola GX",
		'de-de': "Alola-Sleimok GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 220,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chemical Breath",
				'fr-fr': "Souffle Chimique",
				'es-es': "Aliento Químico",
				'it-it': "Alito Chimico",
				'pt-br': "Hálito Químico",
				'de-de': "Chemischer Hauch"
			},
			effect: {
				'en-us': "This attack does 70 more damage for each Special Condition affecting your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 70 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 70 puntos de daño más por cada Condición Especial que le afecte al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 70 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 70 pontos de dano a mais para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 70 Schadenspunkte mehr mal der Anzahl der Speziellen Zustände zu, von denen das Aktive Pokémon deines Gegners betroffen ist."
			},
			damage: "10+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'es-es': "Triturar",
				'it-it': "Sgranocchio",
				'pt-br': "Mastigada",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

		},
		{

			name: {
				'en-us': "Tri Hazard GX",
				'fr-fr': "Triple Danger GX",
				'es-es': "Triple Riesgo GX",
				'it-it': "Triplo Rischio-GX",
				'pt-br': "Perigo Triplo GX",
				'de-de': "Dreifachgefahr GX"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Burned, Paralyzed, and Poisoned. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Brûlé, Empoisonné et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Envenenado, Paralizado y Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene bruciato, paralizzato e avvelenato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Envenenado, Paralisado e Queimado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verbrannt, paralysiert und vergiftet. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 299536,
		tcgplayer: 138573
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
