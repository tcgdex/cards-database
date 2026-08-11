import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptéra",
		'es-es': "Aerodactyl",
		'it-it': "Aerodactyl",
		'pt-br': "Aerodactyl",
		'de-de': "Aerodactyl"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'es-es': "Supersónico",
				'it-it': "Supersuono",
				'pt-br': "Supersônico",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fossil Fangs",
				'fr-fr': "Crocs Fossiles",
				'es-es': "Colmillos Fósil",
				'it-it': "Zanne Fossili",
				'pt-br': "Caninos Fossilizados",
				'de-de': "Fossile Reißer"
			},
			effect: {
				'en-us': "If you don’t have any Pokémon-GX or Pokémon-EX on your Bench, this attack does 90 more damage.",
				'fr-fr': "Si vous n’avez pas de Pokémon-GX ou de Pokémon-EX sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si no tienes ningún Pokémon-GX o Pokémon-EX en tu Banca, este ataque hace 90 puntos de daño más.",
				'it-it': "Se non hai dei Pokémon-GX o dei Pokémon-EX in panchina, questo attacco infligge 90 danni in più.",
				'pt-br': "Se você não tiver nenhum Pokémon-GX ou Pokémon-EX no seu Banco, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn du kein Pokémon-GX oder Pokémon-EX auf deiner Bank hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Restored from DNA found in amber, this Pokémon exhibited ferocity that was greater than expected. Some casualties resulted.",
	},

	thirdParty: {
		cardmarket: 369057,
		tcgplayer: 183919
	}
}

export default card
