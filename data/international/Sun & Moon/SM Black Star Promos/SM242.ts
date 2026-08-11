import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee GX",
		'fr-fr': "Évoli GX",
		'es-es': "Eevee GX",
		'it-it': "Eevee GX",
		'pt-br': "Eevee GX",
		'de-de': "Evoli GX"
	},

	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ascension DNA",
			'fr-fr': "Créateur de Joie GX",
			'es-es': "Ascensión ADN",
			'it-it': "Ascensione DNA",
			'pt-br': "DNA de Ascensão",
			'de-de': "Aufstiegs-DNA"
		},

		effect: {
			'en-us': "Once during your turn (before your attack), if you have a Pokémon in your hand that evolves from Eevee, you may put that card onto this Pokémon to evolve it. Before evolving, heal all damage from this Pokémon. You can’t use this Ability during your first turn or the turn this Pokémon was put into play.",
			'fr-fr': "Placez 3 cartes de votre pile de défausse dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			'es-es': "Una vez durante tu turno (antes de tu ataque), si tienes en tu mano 1 Pokémon que evolucione de Eevee, puedes poner esa carta sobre este Pokémon para hacerlo evolucionar. Antes de que evolucione, cura todos los puntos de daño a este Pokémon. No puedes usar esta habilidad durante tu primer turno o en el turno en que este Pokémon se haya puesto en juego.",
			'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se hai in mano una carta che si evolve da Eevee, puoi mettercela sopra per farlo evolvere. Prima dell’evoluzione, cura questo Pokémon da tutti i danni. Non puoi usare questa abilità durante il tuo primo turno o durante il turno in cui questo Pokémon è stato messo in gioco.",
			'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se você tiver um Pokémon na sua mão que evolua de Eevee, você poderá colocar aquela carta sobre este Pokémon para evoluí-lo. Cure todo o dano deste Pokémon antes de evoluí-lo. Você não pode usar esta Habilidade durante a sua primeira vez de jogar ou na rodada em que este Pokémon entrar em jogo.",
			'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn du ein Pokémon auf deiner Hand hast, das sich aus Evoli entwickelt, jene Karte auf dieses Pokémon legen, um es zu entwickeln. Bevor du es entwickelst, heile allen Schaden bei diesem Pokémon. Du kannst diese Fähigkeit nicht während deines ersten Zuges oder während des Zuges, in dem dieses Pokémon ins Spiel gebracht wurde, einsetzen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Boost Dash",
			'fr-fr': "Ruée Propulsée",
			'es-es': "Carrera Impulso",
			'it-it': "Scatto Caricato",
			'pt-br': "Impulso de Corrida",
			'de-de': "Boost-Sprint"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Joy Maker GX",
			'fr-fr': "Créateur de Joie GX",
			'es-es': "Creador de Alegría GX",
			'it-it': "Portatore di Gioia GX",
			'pt-br': "Motivo de Alegria GX",
			'de-de': "Gute Laune GX"
		},

		effect: {
			'en-us': "Put 3 cards from your discard pile into your hand. (You can’t use more than 1 GX attack in a game.)",
			'fr-fr': "Placez 3 cartes de votre pile de défausse dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			'es-es': "Pon 3 cartas de tu pila de descartes en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
			'it-it': "Prendi tre carte dalla tua pila degli scarti e aggiungile alle carte che hai in mano. Non puoi usare più di un attacco GX a partita.",
			'pt-br': "Coloque 3 cartas da sua pilha de descarte na sua mão (você não pode usar mais de 1 ataque GX por partida).",
			'de-de': "Nimm 3 Karten aus deinem Ablagestapel auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
}

export default card
