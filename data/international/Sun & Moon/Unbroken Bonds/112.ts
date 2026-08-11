import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Building Spite",
				'fr-fr': "Mépris Grandissant",
				'es-es': "Rencor Creciente",
				'it-it': "Accumulo Dispettoso",
				'pt-br': "Acumular Rancor",
				'de-de': "Racheaufbau"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put 1 damage counter on this Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer un marqueur de dégâts sur ce Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes poner 1 contador de daño en este Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere un segnalino danno su questo Pokémon.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 1 contador de dano neste Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Schadensmarke auf dieses Pokémon legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Anguish Cry",
				'fr-fr': "Cri Angoissé",
				'es-es': "Grito de Angustia",
				'it-it': "Grida di Tormento",
				'pt-br': "Grito Angustiante",
				'de-de': "Angstschrei"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10+",

		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that was formed by 108 spirits. It is bound to a fissure in an odd keystone.",
	},

	thirdParty: {
		cardmarket: 372402,
		tcgplayer: 189212
	}
}

export default card
