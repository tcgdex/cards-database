import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Machamp GX",
		'fr-fr': "Mackogneur GX",
		'es-es': "Machamp GX",
		'it-it': "Machamp GX",
		'pt-br': "Machamp GX",
		'de-de': "Machomei GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 250,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Cross-Cut",
				'fr-fr': "Coupe Transversale",
				'es-es': "Atajar",
				'it-it': "Fendente Incrociato",
				'pt-br': "Corte em Cruz",
				'de-de': "Überkreuzzerschneider"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Bedrock Breaker",
				'fr-fr': "Brise Fondation",
				'es-es': "Rompecimientos",
				'it-it': "Infrangiroccia",
				'pt-br': "Quebrador de Alicerce",
				'de-de': "Felsgrundbrecher"
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez toute carte Stade en jeu.",
				'es-es': "Descarta cualquier carta de Estadio en juego.",
				'it-it': "Scarta una carta Stadio in gioco.",
				'pt-br': "Descarte qualquer carta de Estádio em jogo.",
				'de-de': "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 130,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Muscle Punch GX",
				'fr-fr': "Poing Musclé GX",
				'es-es': "Puro Músculo GX",
				'it-it': "Pugno Nerboruto-GX",
				'pt-br': "Soco Musculoso GX",
				'de-de': "Muskel-Punch GX"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O dano deste ataque não é afetado por Resistência (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 299467,
		tcgplayer: 138550
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
