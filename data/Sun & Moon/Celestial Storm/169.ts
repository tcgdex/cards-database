import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Shiftry GX",
		fr: "Tengalice GX",
		es: "Shiftry GX",
		it: "Shiftry GX",
		pt: "Shiftry GX",
		de: "Tengulist GX"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 240,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
				es: "Desconcierto",
				it: "Sconcerto",
				pt: "Perplexo",
				de: "Perplex"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
				es: "Paranormal",
				it: "Extrasenso",
				pt: "Extrassensorial",
				de: "Sondersensor"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 90 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 90 puntos de daño más.",
				it: "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 90 danni in più.",
				pt: "Se você tiver o mesmo número de cartas na sua mão que o seu oponente, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Den of Iniquity GX",
				fr: "Lieu de Perdition GX",
				es: "Antro de Perdición GX",
				it: "Covo Maledetto-GX",
				pt: "Toca da Crueldade GX",
				de: "Höhle des Frevels GX"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into their deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Votre adversaire mélange ce Pokémon et toutes les cartes qui lui sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Elige 1 de los Pokémon de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja y las baraja todas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scegli uno dei Pokémon del tuo avversario. Il tuo avversario rimischia quel Pokémon e tutte le carte a lui assegnate nel suo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Escolha 1 dos Pokémon do seu oponente. Seu oponente embaralha aquele Pokémon e todas as cartas ligadas a ele no próprio baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wähle 1 Pokémon deines Gegners. Dein Gegner mischt jenes Pokémon und alle an es angelegten Karten in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 361261,
		tcgplayer: 170824
	}
}

export default card
