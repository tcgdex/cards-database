import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'es-es': "Gengar",
		'it-it': "Gengar",
		'pt-br': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sinister Fog",
				'fr-fr': "Brouillard Sinistre",
				'es-es': "Niebla Siniestra",
				'it-it': "Bruma Sinistra",
				'pt-br': "Névoa Sinistra",
				'de-de': "Nebel des Grauens"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent's Benched Pokémon.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 1 marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 1 contador de daño en cada uno de los Pokémon en Banca de tu rival.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti un segnalino danno su ciascuno dei Pokémon nella panchina del tuo avversario.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 1 contador de danos em cada um dos Pokémon no Banco do seu oponente.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Creep Show",
				'fr-fr': "Spectacle Perturbant",
				'es-es': "Espectáculo Escalofriante",
				'it-it': "Scuola di Mostri",
				'pt-br': "Show de Horrores",
				'de-de': "Gruselkabinett"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has 3 or more damage counters on it, that Pokémon is Knocked Out.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a 3 marqueurs de dégâts ou plus, ce dernier est mis K.O.",
				'es-es': "Si el Pokémon Activo de tu rival tiene 3 o más contadores de daño sobre él, ese Pokémon queda Fuera de Combate.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha tre o più segnalini danno, viene messo KO.",
				'pt-br': "Se o Pokémon Ativo do seu oponente possuir 3 ou mais contadores de danos, aquele Pokémon será Nocauteado.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 3 Schadensmarken liegen, wird jenes Pokémon kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Hiding in people's shadows at night, it absorbs their heat. The chill it causes makes the victims shake.",
	},

	thirdParty: {
		cardmarket: 286306,
		tcgplayer: 107179
	}
}

export default card
