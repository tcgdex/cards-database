import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [334],
	set: Set,

	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Magical Echo",
			'fr-fr': "Écho Magique",
			'es-es': "Eco Mágico",
			'it-it': "Eco Incantevole",
			'pt-br': "Eco Mágico",
			'de-de': "Magisches Echo"
		},

		effect: {
			'en-us': "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
			'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
			'es-es': "Mueve todos los contadores de daño de 1 de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			'it-it': "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina al Pokémon attivo del tuo avversario.",
			'pt-br': "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente.",
			'de-de': "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blasting Wind",
			'fr-fr': "Vent Impitoyable",
			'es-es': "Vientos Explosivos",
			'it-it': "Vento Distruttivo",
			'pt-br': "Vendaval Avassalador",
			'de-de': "Peitschender Wind"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "As it flies in a calm and relaxed manner, Altaria performs a humming song that would enrapture any audience.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682190,
				tcgplayer: 451793
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682190,
				tcgplayer: 451793
			}
		},
	],
}

export default card
