import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [429],
	set: Set,

	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'es-es': "Mismagius",
		'it-it': "Mismagius",
		'pt-br': "Mismagius",
		'de-de': "Traunmagil"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
		'de-de': "Traunfugil"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Spiteful Magic",
			'fr-fr': "Magie Malveillante",
			'es-es': "Magia Malévola",
			'it-it': "Incantesimo Dispettoso",
			'pt-br': "Magia Rancorosa",
			'de-de': "Magische Vergeltung"
		},

		effect: {
			'en-us': "If this Pokémon has full HP and is Knocked Out by damage from an attack from your opponent's Pokémon, put 8 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon a tous ses PV et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Si este Pokémon tiene todos sus PS y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 8 contadores de daño en el Pokémon Atacante.",
			'it-it': "Se questo Pokémon ha tutti i PS e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti otto segnalini danno sul Pokémon attaccante.",
			'pt-br': "Se este Pokémon tiver PS cheio e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque 8 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 8 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Eerie Voice",
			'fr-fr': "Voix Lugubre",
			'es-es': "Voz Espeluznante",
			'it-it': "Vocemistero",
			'pt-br': "Voz Misteriosa",
			'de-de': "Schaurige Stimme"
		},

		effect: {
			'en-us': "Put 2 damage counters on each of your opponent's Pokémon.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			'es-es': "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival.",
			'it-it': "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			'pt-br': "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente.",
			'de-de': "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its muttered curses can cause awful headaches or terrifying visions that torment others.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682111,
				tcgplayer: 451718
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682111,
				tcgplayer: 451718
			}
		},
	],
}

export default card
