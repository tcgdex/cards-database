import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'es-es': "Sharpedo",
		'it-it': "Sharpedo",
		'pt-br': "Sharpedo",
		'de-de': "Tohaido"
	},

	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Rough Skin",
				'fr-fr': "Peau Dure",
				'es-es': "Piel Tosca",
				'it-it': "Cartavetro",
				'pt-br': "Pele Áspera",
				'de-de': "Rauhaut"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
				'pt-br': "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Impact",
				'fr-fr': "Impact Aqua",
				'es-es': "Impacto Aqua",
				'it-it': "Acquimpatto",
				'pt-br': "Impacto Aqua",
				'de-de': "Aqua-Einschlag"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Colorless-Symbole in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It has a sad history. In the past, its dorsal fin was a treasured foodstuff, so this Pokémon became a victim of overfishing.",
	},

	thirdParty: {
		cardmarket: 295393,
		tcgplayer: 126954
	}
}

export default card
