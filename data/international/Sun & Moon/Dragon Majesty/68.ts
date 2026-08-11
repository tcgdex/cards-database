import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Altaria GX",
		'fr-fr': "Altaria GX",
		'es-es': "Altaria GX",
		'it-it': "Altaria GX",
		'pt-br': "Altaria GX",
		'de-de': "Altaria GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 200,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Bright Tone",
				'fr-fr': "Tonalité Claire",
				'es-es': "Tono Cristalino",
				'it-it': "Tono Limpido",
				'pt-br': "Tom Límpido",
				'de-de': "Heller Klang"
			},
			effect: {
				'en-us': "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX ou de Pokémon-EX.",
				'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon-GX y Pokémon-EX.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-GX e dei Pokémon-EX.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Pokémon-GX e Pokémon-EX.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Pokémon-GX und Pokémon-EX zugefügt wird."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Sonic Edge",
				'fr-fr': "Tranchant Sonique",
				'es-es': "Tajo Sónico",
				'it-it': "Muro del Suono",
				'pt-br': "Gume Sônico",
				'de-de': "Schallkante"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 110,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Euphoria GX",
				'fr-fr': "Euphorie-GX",
				'es-es': "Euforia-GX",
				'it-it': "Euforia-GX",
				'pt-br': "Euforia-GX",
				'de-de': "Euphorie-GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep. Heal all damage from all of your Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi. Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido. Cura todos los puntos de daño a todos tus Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato. Cura tutti i tuoi Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido. Cure todo o dano de todos os seus Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt. Heile allen Schaden bei jedem deiner Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 363539,
		tcgplayer: 175498
	}
}

export default card
