import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Wobbuffet",
		'fr-fr': "Qulbutoké de la Team Rocket",
		'de-de': "Team Rockets Woingenau",
		'it-it': "Wobbuffet del Team Rocket",
		'es-es': "Wobbuffet del Team Rocket",
		'pt-br': "Wobbuffet da Equipe Rocket"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [202],
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Rocket Mirror",
			'fr-fr': "Miroir Rocket",
			'de-de': "Rocket-Spiegel",
			'it-it': "Specchio Rocket",
			'es-es': "Espejo Rocket",
			'pt-br': "Espelho Rocket"
	},

		effect: {
			'en-us': "Move all damage counters from 1 of your Benched Team Rocket's Pokémon to your opponent's Active Pokémon.",
			'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de la Team Rocket de Banc vers le Pokémon Actif de votre adversaire.",
			'de-de': "Verschiebe alle Schadensmarken von 1 Team Rockets Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners.",
			'it-it': "Sposta tutti i segnalini danno da uno dei tuoi Pokémon del Team Rocket in panchina al Pokémon attivo del tuo avversario.",
			'es-es': "Mueve todos los contadores de daño de uno de tus Pokémon del Team Rocket en Banca al Pokémon Activo de tu rival.",
			'pt-br': "Mova todos os contadores de dano de 1 dos seus Pokémon da Equipe Rocket no Banco para o Pokémon Ativo do seu oponente."
	}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'de-de': "Abrupter Kopfstoß",
			'it-it': "Rimbalzo Bottintesta",
			'es-es': "Bote Cabezazo",
			'pt-br': "Cabeçada Ricochete"
	},

		damage: 70
	}],

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826852,
				tcgplayer: 635467
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 827833,
				tcgplayer: 635468
			},
		}
	]
}

export default card
