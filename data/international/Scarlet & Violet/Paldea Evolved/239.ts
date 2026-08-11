import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [702],
	set: Set,

	name: {
		'fr-fr': "Dedenne-ex",
		'en-us': "Dedenne ex",
		'es-es': "Dedenne ex",
		'it-it': "Dedenne-ex",
		'pt-br': "Dedenne ex",
		'de-de': "Dedenne-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'fr-fr': "Échange-Queue",
			'en-us': "Tail Swap",
			'es-es': "Coletazo Intercambio",
			'it-it': "Codascambio",
			'pt-br': "Troca de Cauda",
			'de-de': "Schweiftausch"
		},

		effect: {
			'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
			'en-us': "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
			'es-es': "Mueve todos los contadores de daño de uno de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			'it-it': "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina al Pokémon attivo del tuo avversario.",
			'pt-br': "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente.",
			'de-de': "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'fr-fr': "Coup Mirifique",
			'en-us': "Wondrous Shot",
			'es-es': "Disparo Asombroso",
			'it-it': "Colpo Meraviglioso",
			'pt-br': "Disparo Admirável",
			'de-de': "Wundersamer Schuss"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'en-us': "Discard an Energy from this Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715714,
				tcgplayer: 497647,
				cardtrader: 248902
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

	
}

export default card
