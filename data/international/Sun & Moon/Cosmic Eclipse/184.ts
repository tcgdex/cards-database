import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Silvally GX",
		'fr-fr': "Silvallié GX",
		'es-es': "Silvally GX",
		'it-it': "Silvally GX",
		'pt-br': "Silvally GX",
		'de-de': "Amigento GX"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		773,
	],

	hp: 210,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Disk Reload",
				'fr-fr': "Rechargement du Disque",
				'es-es': "Recarga de Disco",
				'it-it': "Ricarica Disco",
				'pt-br': "Recarregar Disco",
				'de-de': "Disc nachladen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere cinque carte in mano.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar cartas até ter 5 cartas na sua mão.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du so lang Karten ziehen, bis du 5 Karten auf deiner Hand hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brave Buddies",
				'fr-fr': "Copains Courageux",
				'es-es': "Colegas Osados",
				'it-it': "Amici Coraggiosi",
				'pt-br': "Bravos Amigos",
				'de-de': "Kühne Kumpel"
			},
			effect: {
				'en-us': "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
				'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 70 puntos de daño más.",
				'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
				'pt-br': "Se você jogou 1 carta de Apoiador da sua mão durante esta vez de jogar, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Silver Knight GX",
				'fr-fr': "Chevalier d’Argent GX",
				'es-es': "Caballero Plateado GX",
				'it-it': "Cavaliere d’Argento GX",
				'pt-br': "Cavaleiro Prateado GX",
				'de-de': "Silberner Ritter GX"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Ultra Beast, it is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si el Pokémon Activo de tu rival es un Ultraente, queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se il Pokémon attivo del tuo avversario è un’Ultracreatura, viene messo KO. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for uma Ultracriatura, aquele Pokémon será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn das Aktive Pokémon deines Gegners eine Ultrabestie ist, ist es kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
		cardmarket: 408544,
		tcgplayer: 201306
	}
}

export default card
