import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [608],
	set: Set,

	name: {
		'fr-fr': "Mélancolux",
		'en-us': "Lampent",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Funécire",
		'en-us': "Litwick",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Flamboiement",
			'en-us': "Flare",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Boule de Feu Envoûtante",
			'en-us': "Alluring Fireball",
			'es-es': "Bola de Fuego Cautivadora",
			'it-it': "Palladifuoco Irresistibile",
			'pt-br': "Bola de Fogo Cativante",
			'de-de': "Verlockender Feuerball"
		},

		effect: {
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 30 damage to the new Active Pokémon.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
		}
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It lurks in cities, pretending to be a lamp. Once it finds someone whose death is near, it will trail quietly after them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725117,
				tcgplayer: 509739,
				cardtrader: 255597
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725117,
				tcgplayer: 509739,
				cardtrader: 255597
			}
		},
	],

	illustrator: "Aya Kusube",

	
}

export default card
