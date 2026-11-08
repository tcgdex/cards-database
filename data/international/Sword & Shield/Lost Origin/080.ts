import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [778],
	set: Set,

	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},

	illustrator: "Ligton",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'es-es': "Desconcierto",
			'it-it': "Sconcerto",
			'pt-br': "Perplexo",
			'de-de': "Perplex"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Worst Gift",
			'fr-fr': "Pire Cadeau",
			'es-es': "Regalo Pésimo",
			'it-it': "Dono Peggiore",
			'pt-br': "Pior Presente",
			'de-de': "Schlimmstes Geschenk"
		},

		effect: {
			'en-us': "This attack does 10 damage for each damage counter on all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en todos los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente sui Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano em todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Pokémon deines Gegners 10 Schadenspunkte zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674093,
				tcgplayer: 283961
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674093,
				tcgplayer: 283961
			}
		},
	],
}

export default card
