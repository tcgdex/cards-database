import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		es: "Unown",
		it: "Unown",
		pt: "Unown",
		de: "Icognito"
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
				en: "HAND",
				fr: "MAIN",
				es: "MANO",
				it: "MANO",
				pt: "MÃO",
				de: "HAND"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if you have 35 or more cards in your hand, you may use this Ability. If you do, you win this game.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si vous avez 35 cartes ou plus dans votre main, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, y si tienes 35 o más cartas en tu mano, puedes usar esta habilidad. Si lo haces, ganas esta partida.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo e hai 35 o più carte in mano, puoi usare questa abilità. Se lo fai, vinci la partita.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo e você tiver 35 ou mais cartas na sua mão, você poderá usar esta Habilidade. Se fizer isto, você vencerá esta partida.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist und du 35 oder mehr Karten auf deiner Hand hast, kannst du diese Fähigkeit einsetzen. Wenn du das machst, gewinnst du dieses Spiel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance Cachée",
				es: "Poder Oculto",
				it: "Introforza",
				pt: "Poder Oculto",
				de: "Kraftreserve"
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

	thirdParty: {
		cardmarket: 365727
	}
}

export default card
