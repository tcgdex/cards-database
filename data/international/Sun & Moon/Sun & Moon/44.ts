import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Wishiwashi",
		'fr-fr': "Froussardine",
		'es-es': "Wishiwashi",
		'it-it': "Wishiwashi",
		'pt-br': "Wishiwashi",
		'de-de': "Lusardin"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		746,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cowardice",
				'fr-fr': "Échappée",
				'es-es': "Acobardamiento",
				'it-it': "Svignarsela",
				'pt-br': "Covardia",
				'de-de': "Drückebergerei"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and return it to your hand. You can’t use this Ability during your first turn or on the turn this Pokémon was put into play.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toutes les cartes attachées à ce Pokémon et le remettre dans votre main. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar todas las cartas unidas a este Pokémon y devolverlo a tu mano. No puedes usar esta habilidad durante tu primer turno o en el turno en que este Pokémon se haya puesto en juego.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare tutte le carte assegnate a questo Pokémon e riprenderlo in mano. Non puoi usare questa abilità durante il tuo primo turno o durante il turno in cui questo Pokémon è stato messo in gioco.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar todas as cartas ligadas a este Pokémon e devolvê-lo à sua mão. Você não pode usar esta Habilidade durante a sua primeira vez de jogar ou na rodada em que este Pokémon entrar em jogo.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du alle Karten von diesem Pokémon auf deinen Ablagestapel legen und es zurück auf deine Hand nehmen. Du kannst diese Fähigkeit nicht während deines ersten Zuges oder während des Zuges, in dem dieses Pokémon ins Spiel gebracht wurde, einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revolver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it's in trouble, its eyes moisten and begin to shine. The shining light attracts its comrades, and they stand together against their enemies.",
	},

	thirdParty: {
		cardmarket: 295355,
		tcgplayer: 126915
	}
}

export default card
