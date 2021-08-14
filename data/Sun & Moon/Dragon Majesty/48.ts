import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "White Kyurem GX",
		fr: "Kyurem Blanc GX",
		es: "Kyurem Blanco GX",
		it: "Kyurem Bianco GX",
		pt: "Kyurem Branco GX",
		de: "Weißes Kyurem GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 190,
	types: [
		"Dragon",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
				es: "Hacer Trizas",
				it: "Tritatutto",
				pt: "Triturar",
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Raging Blade",
				fr: "Lame en Furie",
				es: "Tajo Furioso",
				it: "Lama Furente",
				pt: "Lâmina Devastadora",
				de: "Wutklinge"
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Nova GX",
				fr: "Nova Dragon-GX",
				es: "Estrella Dragón-GX",
				it: "Dragonova-GX",
				pt: "Supernova do Dragão-GX",
				de: "Drachen Nova-GX"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned and Paralyzed. (You can’t use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El Pokémon Activo de tu rival pasa a estar Paralizado y Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il Pokémon attivo del tuo avversario viene bruciato e paralizzato. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Ativo do seu oponente agora está Paralisado e Queimado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
