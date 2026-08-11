import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Yveltal GX",
		'fr-fr': "Yveltal GX",
		'es-es': "Yveltal GX",
		'it-it': "Yveltal GX",
		'pt-br': "Yveltal GX",
		'de-de': "Yveltal GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				'en-us': "Absorb Vitality",
				'fr-fr': "Absorb Vitalité",
				'es-es': "Absorber Vitalidad",
				'it-it': "Vitassorbimento",
				'pt-br': "Absorção de Vitalidade",
				'de-de': "Vitalitätsabsorber"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
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
				'en-us': "Sonic Evil",
				'fr-fr': "Mal Sonique",
				'es-es': "Maldad Sónica",
				'it-it': "Suoni Maligni",
				'pt-br': "Maldade Sônica",
				'de-de': "Schall der Bosheit"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 100,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Doom Count GX",
				'fr-fr': "Décompte Tragique GX",
				'es-es': "Cuenta Trágica-GX",
				'it-it': "Segnale del Giudizio-GX",
				'pt-br': "Contagem Amaldiçoada GX",
				'de-de': "Unglückszahl GX"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon has exactly 4 damage counters on it, that Pokémon is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a exactement 4 marqueurs de dégâts, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si el Pokémon Activo de tu rival tiene exactamente 4 contadores de daño sobre él, ese Pokémon queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se il Pokémon attivo del tuo avversario ha esattamente quattro segnalini danno, quel Pokémon viene messo KO. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se o Pokémon Ativo do seu oponente tiver exatamente 4 contadores de dano nele, aquele Pokémon será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners genau 4 Schadensmarken liegen, ist jenes Pokémon kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		tcgplayer: 165733
	}
}

export default card
