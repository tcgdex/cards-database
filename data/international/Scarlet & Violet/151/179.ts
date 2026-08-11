import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [122],
	set: Set,

	name: {
		'fr-fr': "M. Mime",
		'en-us': "Mr. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Barrière Copie",
			'en-us': "Mimic Barrier",
			'es-es': "Barrera Mimética",
			'it-it': "Barriera Mimica",
			'pt-br': "Barreira de Mímica",
			'de-de': "Mimikry-Sperre"
		},

		effect: {
			'fr-fr': "Si ce Pokémon et le Pokémon Actif de votre adversaire ont autant d'Énergies attachées, évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire.",
			'en-us': "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, prevent all damage done to this Pokémon by attacks from your opponent's Pokémon.",
			'es-es': "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival.",
			'it-it': "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario.",
			'pt-br': "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, previna todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente.",
			'de-de': "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Puissance Psy",
			'en-us': "Psypower",
			'es-es': "Psicopoder",
			'it-it': "Psicotere",
			'pt-br': "Poder Psíquico",
			'de-de': "Psy-Power"
		},

		effect: {
			'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
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
	regulationMark: "G",

	description: {
		'en-us': "It's known for its top-notch pantomime skills. It protects itself from all sorts of attacks by emitting auras from its fingers to create walls.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733774,
				tcgplayer: 517028,
				cardtrader: 261311
			}
		},
	],

	illustrator: "OKACHEKE",

	
}

export default card
