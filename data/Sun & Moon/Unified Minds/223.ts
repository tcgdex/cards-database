import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Latios-GX",
		fr: "Latios-GX",
		es: "Latios-GX",
		it: "Latios-GX",
		pt: "Latios-GX",
		de: "Latios-GX"
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
				en: "Power Bind",
				fr: "Puissance Restreinte",
				es: "Sujeción de Poder",
				it: "Legaforza",
				pt: "Aprisionador de Poder",
				de: "Kraftbindung"
			},
			effect: {
				en: "If you have 4 or fewer Pokémon in play, this Pokémon can’t attack.",
				fr: "Si vous avez 4 Pokémon ou moins en jeu, ce Pokémon ne peut pas attaquer.",
				es: "Si tienes 4 Pokémon o menos en juego, este Pokémon no puede atacar.",
				it: "Se hai quattro o meno Pokémon in gioco, questo Pokémon non può attaccare.",
				pt: "Se você tiver 4 ou menos Pokémon em jogo, este Pokémon não poderá atacar.",
				de: "Wenn du 4 oder weniger Pokémon im Spiel hast, kann dieses Pokémon nicht angreifen."
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
				en: "Tag Purge",
				fr: "Escouade-Éclat",
				es: "Purga Relevo",
				it: "Abbagliante Alleati",
				pt: "Expurgação de Aliados",
				de: "Team-Block"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from TAG TEAM Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon ESCOUADE.",
				es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon de equipo de RELEVOS.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon ALLEATI.",
				pt: "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Pokémon ALIADOS.",
				de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von TAG TEAM Pokémon zugefügt wird."
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Clear Vision GX",
				fr: "Acuité GX",
				es: "Visión Clara GX",
				it: "Chiara Visione GX",
				pt: "Visão Clara GX",
				de: "Freie Sicht GX"
			},
			effect: {
				en: "For the rest of this game, your opponent can’t use any GX attacks. (You can’t use more than 1 GX attack in a game.)",
				fr: "Jusqu’à la fin de la partie, votre adversaire ne peut pas utiliser d’attaque GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Durante el resto de la partida, tu rival no puede usar ningún ataque GX. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Per il resto della partita, il tuo avversario non può usare attacchi GX. Non puoi usare più di un attacco GX a partita.",
				pt: "Pelo resto da partida, seu oponente não poderá usar qualquer ataque GX (você não pode usar mais de 1 ataque GX por partida).",
				de: "Für den Rest des Spiels kann dein Gegner keine GX-Attacken einsetzen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
