import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [518],
	set: Set,

	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana",
		'es-es': "Musharna",
		'it-it': "Musharna",
		'pt-br': "Musharna",
		'de-de': "Somnivora"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'es-es': "Munna",
		'it-it': "Munna",
		'pt-br': "Munna",
		'de-de': "Somniam"
	},

	stage: "Stage1",
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
	retreat: 2,
	regulationMark: "E",
	illustrator: "Tika Matsuno",

	description: {
		'en-us': "It drowses and dreams all the time. It's best to leave it be if it's just woken up, as it's a terrible grump when freshly roused from sleep."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sleep Inducer",
			'fr-fr': "Poussododo",
			'de-de': "Schlafeinflößer",
			'es-es': "Inductor de Sueño",
			'pt-br': "Indutor de Sono",
			'it-it': "Induci-Sonno"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Asleep.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Endormi.",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon schläft jetzt.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Dormido.",
			'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Adormecido.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene addormentato."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'de-de': "Psychokinese",
			'es-es': "Psíquico",
			'pt-br': "Psíquico",
			'it-it': "Psichico"
		},

		damage: "30+",

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582647,
				tcgplayer: 253299
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582647,
				tcgplayer: 253299
			}
		},
	],
}

export default card
