import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Ninetales",
		'fr-fr': "Feunard d’Alola",
		'es-es': "Ninetales de Alola",
		'it-it': "Ninetales di Alola",
		'pt-br': "Ninetales de Alola",
		'de-de': "Alola Vulnona"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Luminous Barrier",
				'fr-fr': "Barrière Lumineuse",
				'es-es': "Barrera Luminosa",
				'it-it': "Luminobarriera",
				'pt-br': "Barreira Luminosa",
				'de-de': "Klare Barriere"
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
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
				'es-es': "Rayo Aurora",
				'it-it': "Raggiaurora",
				'pt-br': "Raio Aurora",
				'de-de': "Aurorastrahl"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It creates drops of ice in its coat and showers them over its enemies. Anyone who angers it will be frozen stiff in an instant.",
	},

	thirdParty: {
		cardmarket: 369040,
		tcgplayer: 183895
	}
}

export default card
