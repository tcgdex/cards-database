import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Heatproof",
				'fr-fr': "Ignifugé",
				'es-es': "Ignífugo",
				'it-it': "Antifuoco",
				'pt-br': "À Prova de Calor",
				'de-de': "Hitzeschutz"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent’s Fire Pokémon.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Fire de votre adversaire.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Fire de tu rival.",
				'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire del tuo avversario.",
				'pt-br': "Previne todo o dano causado a este Pokémon por ataques dos Pokémon Fire do seu oponente.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Fire-Pokémon deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shady Stamp",
				'fr-fr': "Coup Louche",
				'es-es': "Impresión Sombría",
				'it-it': "Ombraimpronta",
				'pt-br': "Timbre de Sombra",
				'de-de': "Zwielichtstampfer"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
	},

	thirdParty: {
		cardmarket: 369030,
		tcgplayer: 183883
	}
}

export default card
