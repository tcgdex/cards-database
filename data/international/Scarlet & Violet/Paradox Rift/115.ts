import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [510],
	set: Set,

	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'de-de': "Kleoparda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Dishonest Swap",
			'fr-fr': "Échange Malhonnête",
			'es-es': "Intercambio Deshonesto",
			'it-it': "Scambio Sleale",
			'pt-br': "Troca Desonesta",
			'de-de': "Unredlicher Tausch"
		},

		effect: {
			'en-us': "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
			'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
			'es-es': "Mueve todos los contadores de daño de uno de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			'it-it': "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina al Pokémon attivo del tuo avversario.",
			'pt-br': "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente.",
			'de-de': "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 60
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
		'en-us': "This stealthy Pokémon sneaks up behind prey without making any sound at all. It competes with Thievul for territory.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740638,
				tcgplayer: 523789,
				cardtrader: 265231
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740638,
				tcgplayer: 523789,
				cardtrader: 265231
			}
		},
	],

	illustrator: "Yoshioka",

	
}

export default card
