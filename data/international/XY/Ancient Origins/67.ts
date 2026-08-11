import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Digital Reboot",
				'fr-fr': "Redémarrage Numérique",
				'es-es': "Reinicio Digital",
				'it-it': "Riavvio Digitale",
				'pt-br': "Reinicialização Digital",
				'de-de': "Digitaler Neustart"
			},
			effect: {
				'en-us': "Devolve as many of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
				'fr-fr': "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
				'es-es': "Involuciona tantos Pokémon de tu Banca como quieras tantas veces como desees. Pon cada carta de Evolución eliminada de esta manera en tu mano.",
				'it-it': "Annulla a piacimento l'evoluzione dei tuoi Pokémon in panchina. Aggiungi le carte Evoluzione rimosse in questo modo a quelle che hai in mano.",
				'pt-br': "Reverta os Pokémon no Banco tantas vezes quanto quiser. Coloque cada card de Evolução removido desta maneira na sua mão.",
				'de-de': "Rückentwickle beliebig viele Pokémon auf deiner Bank, sooft du möchtest. Nimm jede auf diese Weise entfernte Evolutionskarte auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de Lumière",
				'es-es': "Destello Deslumbrante",
				'it-it': "Accecobomba",
				'pt-br': "Explosão Fascinante",
				'de-de': "Blendende Explosion"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			'fr-fr': "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			'es-es': "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			'it-it': "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'pt-br': "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
			'de-de': "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
		}
	}],

	description: {
		'en-us': "Its programming was modified to enable it to travel through alien dimensions. Seems there might have been an error…",
	},

	thirdParty: {
		cardmarket: 284245,
		tcgplayer: 101489
	}
}

export default card
