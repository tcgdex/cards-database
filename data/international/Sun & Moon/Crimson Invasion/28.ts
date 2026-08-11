import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Regice",
		'fr-fr': "Regice",
		'es-es': "Regice",
		'it-it': "Regice",
		'pt-br': "Regice",
		'de-de': "Regice"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Iceberg Shield",
				'fr-fr': "Bouclier Iceberg",
				'es-es': "Escudo Iceberg",
				'it-it': "Scudo Iceberg",
				'pt-br': "Escudo Iceberg",
				'de-de': "Im Schutz des Eisbergs"
			},
			effect: {
				'en-us': "If you have Regirock in play, prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Stage 2 Pokémon.",
				'fr-fr': "Si vous avez Regirock en jeu, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon de Niveau 2 de votre adversaire.",
				'es-es': "Si tienes a Regirock en juego, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon de Fase 2 de tu rival.",
				'it-it': "Se hai Regirock in gioco, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon di Fase 2 del tuo avversario.",
				'pt-br': "Se você tiver Regirock em jogo, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon pelos Pokémon Estágio 2 do seu oponente.",
				'de-de': "Wenn du Regirock im Spiel hast, verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon durch Phase-2-Pokémon deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Smash",
				'fr-fr': "Impact Glacial",
				'es-es': "Golpe Gélido",
				'it-it': "Gelocolpo",
				'pt-br': "Pancada Congelada",
				'de-de': "Frostschlag"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is said to have slept in a glacier for thousands of years. Its body can't be melted, even by magma.",
	},

	thirdParty: {
		cardmarket: 311878,
		tcgplayer: 149050
	}
}

export default card
