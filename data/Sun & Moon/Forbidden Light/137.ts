import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Yveltal GX",
		fr: "Yveltal GX",
		es: "Yveltal GX",
		it: "Yveltal GX",
		pt: "Yveltal GX",
		de: "Yveltal GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 180,

	types: [
		"Darkness",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Absorb Vitality",
				fr: "Absorb Vitalité",
				es: "Absorber Vitalidad",
				it: "Vitassorbimento",
				pt: "Absorção de Vitalidade",
				de: "Vitalitätsabsorber"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sonic Evil",
				fr: "Mal Sonique",
				es: "Maldad Sónica",
				it: "Suoni Maligni",
				pt: "Maldade Sônica",
				de: "Schall der Bosheit"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 100,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Doom Count GX",
				fr: "Décompte Tragique GX",
				es: "Cuenta Trágica-GX",
				it: "Segnale del Giudizio-GX",
				pt: "Contagem Amaldiçoada GX",
				de: "Unglückszahl GX"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has exactly 4 damage counters on it, that Pokémon is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire a exactement 4 marqueurs de dégâts, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si el Pokémon Activo de tu rival tiene exactamente 4 contadores de daño sobre él, ese Pokémon queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se il Pokémon attivo del tuo avversario ha esattamente quattro segnalini danno, quel Pokémon viene messo KO. Non puoi usare più di un attacco GX a partita.",
				pt: "Se o Pokémon Ativo do seu oponente tiver exatamente 4 contadores de dano nele, aquele Pokémon será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners genau 4 Schadensmarken liegen, ist jenes Pokémon kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		cardmarket: 355594,
		tcgplayer: 165735
	}
}

export default card
