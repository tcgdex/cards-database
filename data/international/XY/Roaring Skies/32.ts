import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette",
		'de-de': "Banette"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Évolution Δ",
				'en-us': "Δ Evolution",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
				'en-us': "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.",
				'es-es': "{title}: Puedes jugar esta carta de tu mano para hacer evolucionar a 1 Pokémon durante tu primer turno o durante el turno en que pongas en juego a ese Pokémon.",
				'it-it': "{title}: Puoi giocare questa carta dalla tua mano per far evolvere un Pokémon durante il tuo primo turno o durante il turno in cui l'hai giocato.",
				'pt-br': "{title}: Você pode jogar este card de sua mão para evoluir um Pokémon durante sua primeira vez de jogar ou no turno em que jogar aquele Pokémon.",
				'de-de': "{title}: Du kannst diese Karte von deiner Hand spielen, um 1 Pokémon während deines ersten Zuges oder des Zuges, in dem du es spielst, zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Evolution Jammer",
				'fr-fr': "Bloqueur d'Évolution",
				'es-es': "Interferente de Evolución",
				'it-it': "Evolviblocco",
				'pt-br': "Atolador de Evolução",
				'de-de': "Evolutionsstörer"
			},
			effect: {
				'en-us': "Your opponent can't play any Pokémon from his or her hand to evolve his or her Pokémon during his or her next turn.",
				'fr-fr': "Aucun joueur ne peut jouer de Pokémon de sa main pour faire évoluer ses Pokémon pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ningún Pokémon de su mano para evolucionar a sus Pokémon durante su turno.",
				'it-it': "Il tuo avversario non può giocare dei Pokémon dalla propria mano per far evolvere altri Pokémon durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhum Pokémon da própria mão para evoluir o Pokémon dele ou dela durante a próxima vez de jogar desse oponente.",
				'de-de': "Dein Gegner kann keine Pokémon von seiner Hand spielen, um seine Pokémon während seines nächsten Zuges zu entwickeln."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Curse Deeply",
				'fr-fr': "Malédiction Intense",
				'es-es': "Profunda Maldición",
				'it-it': "Sortilegio",
				'pt-br': "Maldição Profunda",
				'de-de': "Nachhaltiger Fluch"
			},
			effect: {
				'en-us': "Put 5 damage counters on your opponent's Active Pokémon.",
				'fr-fr': "Placez 5 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 5 contadores de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti cinque segnalini danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 5 contadores de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 5 Schadensmarken auf das Aktive Pokémon deines Gegners."
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

	retreat: 1,

	description: {
		'en-us': "Strong feelings of hatred turned a puppet into a Pokémon. If it opens its mouth, its cursed energy escapes.",
	},

	thirdParty: {
		cardmarket: 282699,
		tcgplayer: 98068
	}
}

export default card
