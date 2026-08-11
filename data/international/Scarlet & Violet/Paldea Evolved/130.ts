import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [980],
	set: Set,

	name: {
		'fr-fr': "Terraiste de Paldea-ex",
		'en-us': "Paldean Clodsire ex",
		'es-es': "Clodsire de Paldea ex",
		'it-it': "Clodsire di Paldea-ex",
		'pt-br': "Clodsire de Paldea ex",
		'de-de': "Paldea-Suelord-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Axoloto de Paldea",
		'en-us': "Paldean Wooper",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Marécage Toxique",
			'en-us': "Toxic Wetland",
			'es-es': "Pantano Tóxico",
			'it-it': "Palude Tossica",
			'pt-br': "Brejo Tóxico",
			'de-de': "Giftiges Sumpfgebiet"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si un Stade est en jeu, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné.",
			'en-us': "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
			'es-es': "Una vez durante tu turno, si hay un Estadio en juego, puedes dejar al Pokémon Activo de tu rival Envenenado.",
			'it-it': "Una sola volta durante il tuo turno, se c'è in gioco una carta Stadio, puoi lasciare il Pokémon attivo del tuo avversario avvelenato.",
			'pt-br': "Uma vez durante o seu turno, se um Estádio estiver em jogo, você poderá deixar o Pokémon Ativo do seu oponente Envenenado.",
			'de-de': "Einmal während deines Zuges, wenn eine Stadionkarte im Spiel ist, kannst du das Aktive Pokémon deines Gegners vergiften."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Os Piquant",
			'en-us': "Needle Bone",
			'es-es': "Hueso de Aguja",
			'it-it': "Osso Acuminato",
			'pt-br': "Agulha de Osso",
			'de-de': "Nadelknochen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715605,
				tcgplayer: 497589,
				cardtrader: 248779
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	
}

export default card
