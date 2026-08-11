import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [36],
	set: Set,

	name: {
		'fr-fr': "Mélodelfe",
		'en-us': "Clefable",
		'es-es': "Clefable",
		'it-it': "Clefable",
		'pt-br': "Clefable",
		'de-de': "Pixi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Mélofée",
		'en-us': "Clefairy",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Par Ici",
			'en-us': "Follow Me",
			'es-es': "Señuelo",
			'it-it': "Sonoqui",
			'pt-br': "Isca-viva",
			'de-de': "Spotlight"
		},

		effect: {
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'fr-fr': "Supplément Sélène",
			'en-us': "More Moon",
			'es-es': "Más Luna",
			'it-it': "Più Luna",
			'pt-br': "Lua a Mais",
			'de-de': "Mehr Mond"
		},

		effect: {
			'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			'en-us': "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			'es-es': "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			'it-it': "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
			'pt-br': "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
			'de-de': "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Their ears are sensitive enough to hear a pin drop from over a mile away, so they're usually found in quiet places.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733631,
				tcgplayer: 516036,
				cardtrader: 261164
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733631,
				tcgplayer: 516036,
				cardtrader: 261164
			}
		},
	],

	illustrator: "ryoma uratsuka",

	
}

export default card
