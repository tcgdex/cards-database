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

	illustrator: "Hasuno",
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
				'en-us': "HAND",
				'fr-fr': "MAIN",
				'es-es': "MANO",
				'it-it': "MANO",
				'pt-br': "MÃO",
				'de-de': "HAND"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if you have 35 or more cards in your hand, you may use this Ability. If you do, you win this game.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si vous avez 35 cartes ou plus dans votre main, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, y si tienes 35 o más cartas en tu mano, puedes usar esta habilidad. Si lo haces, ganas esta partida.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo e hai 35 o più carte in mano, puoi usare questa abilità. Se lo fai, vinci la partita.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo e você tiver 35 ou mais cartas na sua mão, você poderá usar esta Habilidade. Se fizer isto, você vencerá esta partida.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist und du 35 oder mehr Karten auf deiner Hand hast, kannst du diese Fähigkeit einsetzen. Wenn du das machst, gewinnst du dieses Spiel."
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
		tcgplayer: 178902
	}
}

export default card
