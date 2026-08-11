import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [581],
	set: Set,

	name: {
		'fr-fr': "Lakmécygne",
		'en-us': "Swanna",
		'es-es': "Swanna",
		'it-it': "Swanna",
		'pt-br': "Swanna",
		'de-de': "Swaroness"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Couaneton",
		'en-us': "Ducklett"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Cirque Céleste",
			'en-us': "Sky Circus",
			'es-es': "Circo Aéreo",
			'it-it': "Circo Aereo",
			'pt-br': "Circo Aéreo",
			'de-de': "Himmelszirkus"
		},

		effect: {
			'fr-fr': "Si vous avez joué Ornithologue de votre main pendant ce tour, ignorez toutes les Énergies dans les coûts d'attaques de ce Pokémon.",
			'en-us': "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon's attack costs.",
			'es-es': "Si has jugado 1 carta de Ornitólogo de tu mano durante este turno, ignora todas las Energías en el coste de los ataques de este Pokémon.",
			'it-it': "Se hai giocato Avicoltore dalla tua mano durante questo turno, ignora tutte le Energie necessarie per usare gli attacchi di questo Pokémon.",
			'pt-br': "Se você jogou Ornitólogo da sua mão durante este turno, ignore todas as Energias nos custos dos ataques deste Pokémon.",
			'de-de': "Wenn du Vogel-Profi während dieses Zuges aus deiner Hand gespielt hast, ignoriere alle Energien in den Attackenkosten dieses Pokémon."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Coupe Aile",
			'en-us': "Feather Slice",
			'es-es': "Tajo Pluma",
			'it-it': "Tranciapiuma",
			'pt-br': "Pena Dilaceradora",
			'de-de': "Federschnitt"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser une carte de votre main. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
			'en-us': "You may discard a card from your hand. If you do, this attack does 70 more damage.",
			'es-es': "Puedes descartar 1 carta de tu mano. Si lo haces, este ataque hace 70 puntos de daño más.",
			'it-it': "Puoi scartare una delle carte che hai in mano. Se lo fai, questo attacco infligge 70 danni in più.",
			'pt-br': "Você pode descartar 1 carta da sua mão. Se fizer isto, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Du kannst 1 Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "70+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	regulationMark: "D",
	retreat: 0,
	stage: "Stage1",

	description: {
		'en-us': "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539868,
				tcgplayer: 232483
			}
		},
	],
}

export default card
