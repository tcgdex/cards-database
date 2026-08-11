import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Garchomp",
		'fr-fr': "Carchacrok",
		'es-es': "Garchomp",
		'it-it': "Garchomp",
		'pt-br': "Garchomp",
		'de-de': "Knakrack"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Avenging Aura",
				'fr-fr': "Aura Vengeresse",
				'es-es': "Aura Vengadora",
				'it-it': "Aura Vendicativa",
				'pt-br': "Aura Vingativa",
				'de-de': "Racheaura"
			},
			effect: {
				'en-us': "If you have more Prize cards remaining than your opponent, this Pokémon’s attacks do 80 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "S’il vous reste plus de cartes Récompense qu’à votre adversaire, les attaques de ce Pokémon infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Si te quedan más cartas de Premio que a tu rival, los ataques de este Pokémon hacen 80 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Se hai più carte Premio rimanenti del tuo avversario, gli attacchi di questo Pokémon infliggono 80 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, os ataques deste Pokémon causarão 80 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Over Slice",
				'fr-fr': "Coupure Excessive",
				'es-es': "Tajada Extra",
				'it-it': "Taglio Sfrenato",
				'pt-br': "Corte Excessivo",
				'de-de': "Überschnitt"
			},
			effect: {
				'en-us': "You may discard an Energy from this Pokémon. If you do, this attack does 40 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Puedes descartar 1 Energía de este Pokémon. Si lo haces, este ataque hace 40 puntos de daño más.",
				'it-it': "Puoi scartare un’Energia assegnata a questo Pokémon. Se lo fai, questo attacco infligge 40 danni in più.",
				'pt-br': "Você pode descartar 1 Energia deste Pokémon. Se fizer isto, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Du kannst 1 Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It flies at the speed of sound while searching for prey, and it has midair battles with Salamence as the two compete for food.",
	},

	thirdParty: {
		cardmarket: 377496,
		tcgplayer: 195068
	}
}

export default card
