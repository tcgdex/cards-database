import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Latios GX",
		'fr-fr': "Latios GX",
		'es-es': "Latios GX",
		'it-it': "Latios GX",
		'pt-br': "Latios GX",
		'de-de': "Latios GX"
	},

	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power Bind",
				'fr-fr': "Puissance Restreinte",
				'es-es': "Sujeción de Poder",
				'it-it': "Legaforza",
				'pt-br': "Aprisionador de Poder",
				'de-de': "Kraftbindung"
			},
			effect: {
				'en-us': "If you have 4 or fewer Pokémon in play, this Pokémon can’t attack.",
				'fr-fr': "Si vous avez 4 Pokémon ou moins en jeu, ce Pokémon ne peut pas attaquer.",
				'es-es': "Si tienes 4 Pokémon o menos en juego, este Pokémon no puede atacar.",
				'it-it': "Se hai quattro o meno Pokémon in gioco, questo Pokémon non può attaccare.",
				'pt-br': "Se você tiver 4 ou menos Pokémon em jogo, este Pokémon não poderá atacar.",
				'de-de': "Wenn du 4 oder weniger Pokémon im Spiel hast, kann dieses Pokémon nicht angreifen."
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
				'en-us': "Tag Purge",
				'fr-fr': "Escouade-Éclat",
				'es-es': "Purga Relevo",
				'it-it': "Abbagliante Alleati",
				'pt-br': "Expurgação de Aliados",
				'de-de': "Team-Block"
			},
			effect: {
				'en-us': "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from TAG TEAM Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon ESCOUADE.",
				'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon de equipo de RELEVOS.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon ALLEATI.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Pokémon ALIADOS.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von TAG TEAM Pokémon zugefügt wird."
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Clear Vision GX",
				'fr-fr': "Acuité GX",
				'es-es': "Visión Clara GX",
				'it-it': "Chiara Visione GX",
				'pt-br': "Visão Clara GX",
				'de-de': "Freie Sicht GX"
			},
			effect: {
				'en-us': "For the rest of this game, your opponent can’t use any GX attacks. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Jusqu’à la fin de la partie, votre adversaire ne peut pas utiliser d’attaque GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Durante el resto de la partida, tu rival no puede usar ningún ataque GX. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Per il resto della partita, il tuo avversario non può usare attacchi GX. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Pelo resto da partida, seu oponente não poderá usar qualquer ataque GX (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Für den Rest des Spiels kann dein Gegner keine GX-Attacken einsetzen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 388902,
		tcgplayer: 195007
	}
}

export default card
