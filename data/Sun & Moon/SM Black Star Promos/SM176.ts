import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Eevee GX",
		fr: "Évoli GX",
		es: "Eevee GX",
		it: "Eevee GX",
		pt: "Eevee GX",
		de: "Evoli GX"
	},
	illustrator: "PLANETA Otani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 160,
	types: [
		"Colorless",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ascension DNA",
				fr: "Créateur de Joie GX",
				es: "Ascensión ADN",
				it: "Ascensione DNA",
				pt: "DNA de Ascensão",
				de: "Aufstiegs-DNA"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a Pokémon in your hand that evolves from Eevee, you may put that card onto this Pokémon to evolve it. Before evolving, heal all damage from this Pokémon. You can’t use this Ability during your first turn or the turn this Pokémon was put into play.",
				fr: "Placez 3 cartes de votre pile de défausse dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Una vez durante tu turno (antes de tu ataque), si tienes en tu mano 1 Pokémon que evolucione de Eevee, puedes poner esa carta sobre este Pokémon para hacerlo evolucionar. Antes de que evolucione, cura todos los puntos de daño a este Pokémon. No puedes usar esta habilidad durante tu primer turno o en el turno en que este Pokémon se haya puesto en juego.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se hai in mano una carta che si evolve da Eevee, puoi mettercela sopra per farlo evolvere. Prima dell’evoluzione, cura questo Pokémon da tutti i danni. Non puoi usare questa abilità durante il tuo primo turno o durante il turno in cui questo Pokémon è stato messo in gioco.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se você tiver um Pokémon na sua mão que evolua de Eevee, você poderá colocar aquela carta sobre este Pokémon para evoluí-lo. Cure todo o dano deste Pokémon antes de evoluí-lo. Você não pode usar esta Habilidade durante a sua primeira vez de jogar ou na rodada em que este Pokémon entrar em jogo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn du ein Pokémon auf deiner Hand hast, das sich aus Evoli entwickelt, jene Karte auf dieses Pokémon legen, um es zu entwickeln. Bevor du es entwickelst, heile allen Schaden bei diesem Pokémon. Du kannst diese Fähigkeit nicht während deines ersten Zuges oder während des Zuges, in dem dieses Pokémon ins Spiel gebracht wurde, einsetzen."
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
				en: "Boost Dash",
				fr: "Ruée Propulsée",
				es: "Carrera Impulso",
				it: "Scatto Caricato",
				pt: "Impulso de Corrida",
				de: "Boost-Sprint"
			},

			damage: 100,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Joy Maker GX",
				fr: "Créateur de Joie GX",
				es: "Creador de Alegría GX",
				it: "Portatore di Gioia GX",
				pt: "Motivo de Alegria GX",
				de: "Gute Laune GX"
			},
			effect: {
				en: "Put 3 cards from your discard pile into your hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Placez 3 cartes de votre pile de défausse dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 3 cartas de tu pila de descartes en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi tre carte dalla tua pila degli scarti e aggiungile alle carte che hai in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 3 cartas da sua pilha de descarte na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Nimm 3 Karten aus deinem Ablagestapel auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
