import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Mawile-GX",
		fr: "Mysdibule-GX",
		es: "Mawile-GX",
		it: "Mawile-GX",
		pt: "Mawile-GX",
		de: "Flunkifer-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
				en: "Captivating Wink",
				fr: "Œillade Envoûtante",
				es: "Guiño Cautivador",
				it: "Ammiccare Incantato",
				pt: "Piscada Cativante",
				de: "Fesselndes Zwinkern"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may have your opponent reveal their hand and put any number of Basic Pokémon you find there onto their Bench.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez demander à votre adversaire de dévoiler sa main et de placer autant de Pokémon de base trouvés que vous voulez sur son Banc.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes hacer que tu rival enseñe las cartas de su mano y ponga cualquier cantidad de Pokémon Básicos que encuentres entre ellas en su Banca.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi far mostrare al tuo avversario le carte che ha in mano, prendere un numero qualsiasi di Pokémon Base presenti tra quelle carte e metterli nella sua panchina.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode fazer com que o seu oponente revele a própria mão e coloque qualquer número de Pokémon Básicos que encontrar lá no Banco dele(a).",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen und beliebig viele Basis-Pokémon, die du dort findest, auf seine Bank zu legen."
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
				en: "Wily Bite",
				fr: "Morsure Maligne",
				es: "Mordisco Astuto",
				it: "Morso Scaltro",
				pt: "Mordida Ardilosa",
				de: "Listiger Biss"
			},
			effect: {
				en: "This attack does 30 more damage for each of your opponent’s Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Big Eater GX",
				fr: "Gros Mangeur GX",
				es: "Comilón GX",
				it: "Mangione GX",
				pt: "Comilão GX",
				de: "Großer Appetit GX"
			},
			effect: {
				en: "Your opponent reveals their hand. Discard all Supporter cards you find there. (You can’t use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Défaussez toutes les cartes Supporter que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Tu rival enseña las cartas de su mano. Descarta todas las cartas de Partidario que encuentres entre ellas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il tuo avversario mostra le carte che ha in mano. Scarta tutte le carte Aiuto presenti tra esse. Non puoi usare più di un attacco GX a partita.",
				pt: "Seu oponente revela a própria mão. Descarte todas as cartas de Apoiador que encontrar lá (você não pode usar mais de 1 ataque GX por partida).",
				de: "Dein Gegner zeigt dir seine Handkarten. Lege alle Unterstützerkarten, die du dort findest, auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
