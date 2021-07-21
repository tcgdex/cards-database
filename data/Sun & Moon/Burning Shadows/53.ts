import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		pt: "Dusknoir",
		de: "Zwirrfinst"
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Invitation",
				fr: "Invitation Obscure",
				es: "Invitación Siniestra",
				it: "Scurinvito",
				pt: "Convite Obscuro",
				de: "Dunkle Einladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent reveal their hand. Put a Basic Pokémon you find there onto your opponent’s Bench, and put 3 damage counters on that Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de dévoiler sa main. Placez l’un des Pokémon de base que vous y trouvez sur le Banc de votre adversaire, puis placez 3 marqueurs de dégâts sur ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes hacer que tu rival enseñe las cartas de su mano. Pon 1 Pokémon Básico que encuentres entre ellas en la Banca de tu rival y pon 3 contadores de daño en ese Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi far mostrare al tuo avversario le carte che ha in mano. Prendi un Pokémon Base presente tra quelle carte, mettilo nella sua panchina e metti tre segnalini danno su quel Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode fazer com que o seu oponente revele a própria mão. Coloque 1 Pokémon Básico que encontrar lá no Banco do seu oponente e coloque 3 contadores de dano naquele Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen. Lege 1 Basis-Pokémon, das du dort findest, auf die Bank deines Gegners und lege 3 Schadensmarken auf jenes Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Jack",
				fr: "Emprise Mentale",
				es: "Levantamente",
				it: "Sollevamente",
				pt: "Tomada Mental",
				de: "Gedankenstoß"
			},
			effect: {
				en: "This attack does 30 more damage for each of your opponent’s Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
