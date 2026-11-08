import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Keldeo GX",
		'fr-fr': "Keldeo GX",
		'es-es': "Keldeo GX",
		'it-it': "Keldeo GX",
		'pt-br': "Keldeo GX",
		'de-de': "Keldeo GX"
	},

	illustrator: "ConceptLab",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		647,
	],

	hp: 170,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Pure Heart",
				'fr-fr': "Cœur Pur",
				'es-es': "Corazón Puro",
				'it-it': "Cuore Puro",
				'pt-br': "Coração Puro",
				'de-de': "Reines Herz"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Pokémon-GX or Pokémon-EX.",
				'fr-fr': "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-GX ou les Pokémon-EX de votre adversaire.",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon-GX o Pokémon-EX de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon-GX o dai Pokémon-EX del tuo avversario.",
				'pt-br': "Previne todos os efeitos de ataques, incluindo dano, causados a este Pokémon pelos Pokémon-GX ou Pokémon-EX do seu oponente.",
				'de-de': "Verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon durch Pokémon-GX oder Pokémon-EX deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
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
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Resolute Blade GX",
				'fr-fr': "Lame Décidée GX",
				'es-es': "Cuchilla Resuelta GX",
				'it-it': "Lama Risoluta GX",
				'pt-br': "Lâmina Resoluta GX",
				'de-de': "Resolute Klinge GX"
			},
			effect: {
				'en-us': "This attack does 50 damage for each of your opponent’s Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño por cada Pokémon en Banca de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni per ogni Pokémon nella panchina del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada Pokémon no Banco do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 388992,
		tcgplayer: 194970
	}
}

export default card
