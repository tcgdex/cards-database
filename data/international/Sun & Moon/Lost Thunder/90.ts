import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Unown",
		'fr-fr': "Zarbi",
		'es-es': "Unown",
		'it-it': "Unown",
		'pt-br': "Unown",
		'de-de': "Icognito"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "DAMAGE",
				'fr-fr': "DÉGÂTS",
				'es-es': "DAÑO",
				'it-it': "DANNI",
				'pt-br': "DANO",
				'de-de': "DAMAGE"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if there are 66 or more damage counters on your Benched Pokémon, you may use this Ability. If you do, you win this game.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si 66 marqueurs de dégâts ou plus sont sur vos Pokémon de Banc, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, y si hay 66 o más contadores de daño en tus Pokémon en Banca, puedes usar esta habilidad. Si lo haces, ganas esta partida.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo e ci sono 66 o più segnalini danno sui tuoi Pokémon in panchina, puoi usare questa abilità. Se lo fai, vinci la partita.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo e houver 66 ou mais contadores de dano nos seus Pokémon no Banco, você poderá usar esta Habilidade. Se fizer isto, você vencerá esta partida.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist und auf den Pokémon auf deiner Bank 66 oder mehr Schadensmarken liegen, kannst du diese Fähigkeit einsetzen. Wenn du das machst, gewinnst du dieses Spiel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance Cachée",
				'es-es': "Poder Oculto",
				'it-it': "Introforza",
				'pt-br': "Poder Oculto",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Shaped like ancient writing, it is a huge mystery whether language or Unown came first.",
	},

	thirdParty: {
		cardmarket: 365727,
		tcgplayer: 178901
	}
}

export default card
