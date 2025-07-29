import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Lunala GX",
		fr: "Lunala GX",
		es: "Lunala GX",
		it: "Lunala GX",
		pt: "Lunala GX",
		de: "Lunala GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Transfer",
				fr: "Transfert Psy",
				es: "Psicotraspaso",
				it: "Psicotransfer",
				pt: "Transferência Psíquica",
				de: "Psychotransfer"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Psychic Energy from 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic de l’un de vos Pokémon vers un autre de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Psychic de 1 de tus Pokémon a otro de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare un’Energia Psychic da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia Psychic de 1 dos seus Pokémon para outro Pokémon seu.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Psychic-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
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
				en: "Moongeist Beam",
				fr: "Rayon Spectral",
				es: "Rayo Umbrío",
				it: "Raggio d’Ombra",
				pt: "Feixe Espectral",
				de: "Schattenstrahl"
			},
			effect: {
				en: "The Defending Pokémon can’t be healed during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede ser curado durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può essere curato.",
				pt: "O Pokémon Defensor não poderá ser curado durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht geheilt werden."
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
				en: "Lunar Fall GX",
				fr: "Chute Lunaire GX",
				es: "Caída Lunar GX",
				it: "Caduta LunareGX",
				pt: "Caída Lunar GX",
				de: "Lunarfall GX"
			},
			effect: {
				en: "Knock Out 1 of your opponent’s Basic Pokémon that isn’t a Pokémon-GX. (You can’t use more than 1 GX attack in a game.)",
				fr: "Mettez K.O. l’un des Pokémon de base de votre adversaire qui n’est pas un Pokémon-GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Deja Fuera de Combate a 1 de los Pokémon Básicos de tu rival que no sea un Pokémon-GX. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Metti KO un Pokémon Base del tuo avversario che non è un Pokémon-GX. Non puoi usare più di un attacco GX a partita.",
				pt: "Nocauteie 1 dos Pokémon Básicos do seu oponente que não seja um Pokémon-GX (você não pode usar mais de 1 ataque GX por partida).",
				de: "Mache 1 Basis-Pokémon deines Gegners, das kein Pokémon-GX ist, kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 295377
	}
}

export default card
