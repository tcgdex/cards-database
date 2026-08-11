import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Metal Fortress",
				'fr-fr': "Forteresse Métallique",
				'es-es': "Fortaleza Metálica",
				'it-it': "Fortezza Metallica",
				'pt-br': "Forte Metálico",
				'de-de': "Metallfestung"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent's attacks, including damage, done to your Benched Pokémon.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, y compris les dégâts, infligés à vos Pokémon de Banc.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, incluido el daño, infligidos a tus Pokémon en Banca.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, inclusi i danni, inflitti ai tuoi Pokémon in panchina.",
				'pt-br': "Previne todos os efeitos de ataques do seu oponente, inclusive danos, causados a seus Pokémon no Banco.",
				'de-de': "Verhindere alle Effekte von Angriffen gegnerischer Pokémon, einschließlich Schaden, die den Pokémon auf deiner Bank zugefügt werden."
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
				'en-us': "Guard Press",
				'fr-fr': "Pression de Garde",
				'es-es': "Presión de Guardia",
				'it-it': "Pressadifesa",
				'pt-br': "Aperto Protetor",
				'de-de': "Schutzdruck"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

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
		cardmarket: 289882,
		tcgplayer: 117836
	}
}

export default card
