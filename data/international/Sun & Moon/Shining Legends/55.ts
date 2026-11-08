import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
		'es-es': "Hoopa",
		'it-it': "Hoopa",
		'pt-br': "Hoopa",
		'de-de': "Hoopa"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Scoundrel Guard",
				'fr-fr': "Protection Malicieuse",
				'es-es': "Guardia Perversa",
				'it-it': "Scudo Malandrino",
				'pt-br': "Guarda Vigarista",
				'de-de': "Spitzbubenwacht"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Pokémon-GX or Pokémon-EX.",
				'fr-fr': "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-GX ou les Pokémon-EX de votre adversaire.",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon-GX o Pokémon-EX de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon-GX o dai Pokémon-EX del tuo avversario.",
				'pt-br': "Previne todos os efeitos de ataques, incluindo dano, causados a este Pokémon pelos Pokémon-GX ou Pokémon-EX do seu oponente.",
				'de-de': "Verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon durch Pokémon-GX oder Pokémon-EX deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Psy Bolt",
				'fr-fr': "Super Psy",
				'es-es': "Superrayo Psi",
				'it-it': "Superpsico",
				'pt-br': "Super-raio Psíquico",
				'de-de': "Super-Psischlag"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "In its true form, it possess a huge amount of power. Legends of its avarice tell how it once carried off an entire castle to gain the treasure hidden within.",
	},

	thirdParty: {
		cardmarket: 301166,
		tcgplayer: 146718
	}
}

export default card
