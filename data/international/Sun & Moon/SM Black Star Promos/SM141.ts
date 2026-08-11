import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "White Kyurem GX",
		'fr-fr': "Kyurem Blanc GX",
		'es-es': "Kyurem Blanco GX",
		'it-it': "Kyurem Bianco GX",
		'pt-br': "Kyurem Branco GX",
		'de-de': "Weißes Kyurem GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 190,
	types: [
		"Dragon",
	],

	stage: "Basic",
	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
				'es-es': "Hacer Trizas",
				'it-it': "Tritatutto",
				'pt-br': "Triturar",
				'de-de': "Zerfetzer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
				'en-us': "Raging Blade",
				'fr-fr': "Lame en Furie",
				'es-es': "Tajo Furioso",
				'it-it': "Lama Furente",
				'pt-br': "Lâmina Devastadora",
				'de-de': "Wutklinge"
			},
			effect: {
				'en-us': "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
				'en-us': "Dragon Nova GX",
				'fr-fr': "Nova Dragon GX",
				'es-es': "Estrella Dragón GX",
				'it-it': "Dragonova GX",
				'pt-br': "Supernova do Dragão GX",
				'de-de': "Drachen Nova GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned and Paralyzed. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado y Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato e paralizzato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado e Queimado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
