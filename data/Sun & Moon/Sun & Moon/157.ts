import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Gumshoos GX",
		fr: "Argouste GX",
		es: "Gumshoos GX",
		it: "Gumshoos GX",
		pt: "Gumshoos GX",
		de: "Manguspektor GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		735,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Search the Premises",
				fr: "Perquisition",
				es: "Registrar el Lugar",
				it: "Sopralluogo",
				pt: "Busca Local",
				de: "Hausdurchsuchung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent reveal their hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de dévoiler sa main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes hacer que tu rival enseñe las cartas de su mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi far mostrare al tuo avversario le carte che ha in mano.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode fazer com que o seu oponente revele a própria mão.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
				es: "Bote Cabezazo",
				it: "Rimbalzo Bottintesta",
				pt: "Cabeçada Ricochete",
				de: "Abrupter Kopfstoß"
			},

			damage: 100,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gumshoe Chance GX",
				fr: "Chance d’Argousin GX",
				es: "Oportunidad Detective GX",
				it: "Occasione Investigativa-GX",
				pt: "Sorte do Detetive GX",
				de: "Manguspektorfall GX"
			},
			effect: {
				en: "This attack does 50 more damage times the amount of Energy attached to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
