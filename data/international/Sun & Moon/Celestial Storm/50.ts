import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Grounding",
				'fr-fr': "Source d’Énergie",
				'es-es': "Conexión Energía Tierra",
				'it-it': "Messa a Terra",
				'pt-br': "Energia Aterrada",
				'de-de': "Energieerdung"
			},
			effect: {
				'en-us': "When 1 of your Pokémon is Knocked Out by damage from an opponent’s attack, you may move a basic Energy card from that Pokémon to this Pokémon.",
				'fr-fr': "Lorsque l’un de vos Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez déplacer une carte Énergie de base du Pokémon mis K.O. vers celui-ci.",
				'es-es': "Cuando 1 de tus Pokémon queda Fuera de Combate por el daño de un ataque de tu rival, puedes mover 1 carta de Energía Básica de ese Pokémon a este Pokémon.",
				'it-it': "Quando uno dei tuoi Pokémon viene messo KO dai danni inflitti da un attacco del tuo avversario, puoi spostare una carta Energia base da quel Pokémon a questo Pokémon.",
				'pt-br': "Quando 1 dos seus Pokémon é Nocauteado pelo dano de um ataque do seu oponente, você pode mover 1 carta de Energia básica daquele Pokémon para este Pokémon.",
				'de-de': "Wenn 1 deiner Pokémon durch den Schaden einer Attacke deines Gegners kampfunfähig wird, kannst du 1 Basis-Energiekarte von jenem Pokémon auf dieses Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Strike",
				'fr-fr': "Frap’Éclair",
				'es-es': "Ataque Fulgor",
				'it-it': "Fulminstocco",
				'pt-br': "Ataque de Raios",
				'de-de': "Blitzschlag"
			},
			effect: {
				'en-us': "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 70 more damage.",
				'fr-fr': "Vous pouvez défausser toute l’Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías Lightning de este Pokémon. Si lo haces, este ataque hace 70 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie Lightning assegnate a questo Pokémon. Se lo fai, questo attacco infligge 70 danni in più.",
				'pt-br': "Você pode descartar todas as Energias Lightning deste Pokémon. Se fizer isto, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Du kannst alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon flashes a bright light that blinds its prey. This creates an opening for it to deliver an electrical attack.",
	},

	thirdParty: {
		cardmarket: 361296,
		tcgplayer: 170869
	}
}

export default card
