import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Mawile GX",
		'fr-fr': "Mysdibule GX",
		'es-es': "Mawile GX",
		'it-it': "Mawile GX",
		'pt-br': "Mawile GX",
		'de-de': "Flunkifer GX"
	},

	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 170,

	types: [
		"Metal",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Captivating Wink",
				'fr-fr': "Œillade Envoûtante",
				'es-es': "Guiño Cautivador",
				'it-it': "Ammiccare Incantato",
				'pt-br': "Piscada Cativante",
				'de-de': "Fesselndes Zwinkern"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may have your opponent reveal their hand and put any number of Basic Pokémon you find there onto their Bench.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez demander à votre adversaire de dévoiler sa main et de placer autant de Pokémon de base trouvés que vous voulez sur son Banc.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes hacer que tu rival enseñe las cartas de su mano y ponga cualquier cantidad de Pokémon Básicos que encuentres entre ellas en su Banca.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi far mostrare al tuo avversario le carte che ha in mano, prendere un numero qualsiasi di Pokémon Base presenti tra quelle carte e metterli nella sua panchina.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode fazer com que o seu oponente revele a própria mão e coloque qualquer número de Pokémon Básicos que encontrar lá no Banco dele(a).",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen und beliebig viele Basis-Pokémon, die du dort findest, auf seine Bank zu legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Wily Bite",
				'fr-fr': "Morsure Maligne",
				'es-es': "Mordisco Astuto",
				'it-it': "Morso Scaltro",
				'pt-br': "Mordida Ardilosa",
				'de-de': "Listiger Biss"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each of your opponent’s Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Big Eater GX",
				'fr-fr': "Gros Mangeur GX",
				'es-es': "Comilón GX",
				'it-it': "Mangione GX",
				'pt-br': "Comilão GX",
				'de-de': "Großer Appetit GX"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Discard all Supporter cards you find there. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Votre adversaire dévoile sa main. Défaussez toutes les cartes Supporter que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Tu rival enseña las cartas de su mano. Descarta todas las cartas de Partidario que encuentres entre ellas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta tutte le carte Aiuto presenti tra esse. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Seu oponente revela a própria mão. Descarte todas as cartas de Apoiador que encontrar lá (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege alle Unterstützerkarten, die du dort findest, auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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

	retreat: 1,

	thirdParty: {
		cardmarket: 388922,
		tcgplayer: 195124
	}
}

export default card
