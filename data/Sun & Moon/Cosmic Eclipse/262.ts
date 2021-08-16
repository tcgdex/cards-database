import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Silvally GX",
		fr: "Silvallié GX",
		es: "Silvally GX",
		it: "Silvally GX",
		pt: "Silvally GX",
		de: "Amigento GX"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Secret Rare",
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
		en: "Type: Null",
		fr: "Type:0",
	},
	stage: "Stage1",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Disk Reload",
				fr: "Rechargement du Disque",
				es: "Recarga de Disco",
				it: "Ricarica Disco",
				pt: "Recarregar Disco",
				de: "Disc nachladen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere cinque carte in mano.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar cartas até ter 5 cartas na sua mão.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du so lang Karten ziehen, bis du 5 Karten auf deiner Hand hast."
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
				en: "Brave Buddies",
				fr: "Copains Courageux",
				es: "Colegas Osados",
				it: "Amici Coraggiosi",
				pt: "Bravos Amigos",
				de: "Kühne Kumpel"
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 70 puntos de daño más.",
				it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
				pt: "Se você jogou 1 carta de Apoiador da sua mão durante esta vez de jogar, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Silver Knight GX",
				fr: "Chevalier d’Argent GX",
				es: "Caballero Plateado GX",
				it: "Cavaliere d’Argento GX",
				pt: "Cavaleiro Prateado GX",
				de: "Silberner Ritter GX"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Ultra Beast, it is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si el Pokémon Activo de tu rival es un Ultraente, queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se il Pokémon attivo del tuo avversario è un’Ultracreatura, viene messo KO. Non puoi usare più di un attacco GX a partita.",
				pt: "Se o Pokémon Ativo do seu oponente for uma Ultracriatura, aquele Pokémon será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn das Aktive Pokémon deines Gegners eine Ultrabestie ist, ist es kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
