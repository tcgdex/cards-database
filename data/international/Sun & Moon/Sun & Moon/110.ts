import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Gumshoos GX",
		'fr-fr': "Argouste GX",
		'es-es': "Gumshoos GX",
		'it-it': "Gumshoos GX",
		'pt-br': "Gumshoos GX",
		'de-de': "Manguspektor GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Search the Premises",
				'fr-fr': "Perquisition",
				'es-es': "Registrar el Lugar",
				'it-it': "Sopralluogo",
				'pt-br': "Busca Local",
				'de-de': "Hausdurchsuchung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may have your opponent reveal their hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de dévoiler sa main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes hacer que tu rival enseñe las cartas de su mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi far mostrare al tuo avversario le carte che ha in mano.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode fazer com que o seu oponente revele a própria mão.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen."
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
				'en-us': "Headbutt Bounce",
				'fr-fr': "Culbute Surprise",
				'es-es': "Bote Cabezazo",
				'it-it': "Rimbalzo Bottintesta",
				'pt-br': "Cabeçada Ricochete",
				'de-de': "Abrupter Kopfstoß"
			},

			damage: 100,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gumshoe Chance GX",
				'fr-fr': "Chance d’Argousin GX",
				'es-es': "Oportunidad Detective GX",
				'it-it': "Occasione Investigativa-GX",
				'pt-br': "Sorte do Detetive GX",
				'de-de': "Manguspektorfall GX"
			},
			effect: {
				'en-us': "This attack does 50 more damage times the amount of Energy attached to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 295422,
		tcgplayer: 126982
	}
}

export default card
