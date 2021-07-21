import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Machamp-GX",
		fr: "Mackogneur-GX",
		es: "Machamp-GX",
		it: "Machamp-GX",
		pt: "Machamp-GX",
		de: "Machomei-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		en: "Machoke",
		fr: "Machopeur",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe Transversale",
				es: "Atajar",
				it: "Fendente Incrociato",
				pt: "Corte em Cruz",
				de: "Überkreuzzerschneider"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
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
				en: "Bedrock Breaker",
				fr: "Brise Fondation",
				es: "Rompecimientos",
				it: "Infrangiroccia",
				pt: "Quebrador de Alicerce",
				de: "Felsgrundbrecher"
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
				es: "Descarta cualquier carta de Estadio en juego.",
				it: "Scarta una carta Stadio in gioco.",
				pt: "Descarte qualquer carta de Estádio em jogo.",
				de: "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
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
				en: "Muscle Punch GX",
				fr: "Poing Musclé GX",
				es: "Puro Músculo GX",
				it: "Pugno Nerboruto-GX",
				pt: "Soco Musculoso GX",
				de: "Muskel-Punch GX"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance. (You can’t use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El daño de este ataque no se ve afectado por Resistencia. (No puedes usar más de 1 ataque GX en una partida).",
				it: "I danni di questo attacco non sono influenzati dalla resistenza. Non puoi usare più di un attacco GX a partita.",
				pt: "O dano deste ataque não é afetado por Resistência (você não pode usar mais de 1 ataque GX por partida).",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
