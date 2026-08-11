import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Lunala GX",
		'fr-fr': "Lunala GX",
		'es-es': "Lunala GX",
		'it-it': "Lunala GX",
		'pt-br': "Lunala GX",
		'de-de': "Lunala GX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		792,
	],

	hp: 250,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Psychic Transfer",
				'fr-fr': "Transfert Psy",
				'es-es': "Psicotraspaso",
				'it-it': "Psicotransfer",
				'pt-br': "Transferência Psíquica",
				'de-de': "Psychotransfer"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Psychic Energy from 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic de l’un de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Psychic de 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare un’Energia Psychic da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia Psychic de 1 dos seus Pokémon para outro Pokémon seu.",
				'de-de': "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Psychic-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Moongeist Beam",
				'fr-fr': "Rayon Spectral",
				'es-es': "Rayo Umbrío",
				'it-it': "Raggio d’Ombra",
				'pt-br': "Feixe Espectral",
				'de-de': "Schattenstrahl"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t be healed during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede ser curado durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può essere curato.",
				'pt-br': "O Pokémon Defensor não poderá ser curado durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht geheilt werden."
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Lunar Fall GX",
				'fr-fr': "Chute Lunaire GX",
				'es-es': "Caída Lunar GX",
				'it-it': "Caduta LunareGX",
				'pt-br': "Caída Lunar GX",
				'de-de': "Lunarfall GX"
			},
			effect: {
				'en-us': "Knock Out 1 of your opponent’s Basic Pokémon that isn’t a Pokémon-GX. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Mettez K.O. l’un des Pokémon de base de votre adversaire qui n’est pas un Pokémon-GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Deja Fuera de Combate a 1 de los Pokémon Básicos de tu rival que no sea un Pokémon-GX. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Metti KO un Pokémon Base del tuo avversario che non è un Pokémon-GX. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Nocauteie 1 dos Pokémon Básicos do seu oponente que não seja um Pokémon-GX (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Mache 1 Basis-Pokémon deines Gegners, das kein Pokémon-GX ist, kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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

	retreat: 2,

	thirdParty: {
		cardmarket: 295377,
		tcgplayer: 126937
	}
}

export default card
