import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Silvally",
		'fr-fr': "Silvallié",
		'es-es': "Silvally",
		'it-it': "Silvally",
		'pt-br': "Silvally",
		'de-de': "Amigento"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		773,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Avenging Heart",
				'fr-fr': "Cœur Vengeur",
				'es-es': "Corazón Vengador",
				'it-it': "Cuore Vendicativo",
				'pt-br': "Coração Vingativo",
				'de-de': "Racheherz"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each Prize card your opponent took on their last turn.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée lors de son dernier tour.",
				'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival en su último turno.",
				'it-it': "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario nel suo ultimo turno.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou na última vez dele(a) jogar.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Preiskarten zu, die dein Gegner während seines letzten Zuges genommen hat."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d’Air",
				'es-es': "Tajo Aéreo",
				'it-it': "Eterelama",
				'pt-br': "Golpe de Ar",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This is its form once it has awakened and evolved. Freed from its heavy mask, its speed is greatly increased.",
	},

	thirdParty: {
		cardmarket: 388707,
		tcgplayer: 195214
	}
}

export default card
