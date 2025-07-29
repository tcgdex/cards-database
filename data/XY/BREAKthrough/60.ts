import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		de: "Gengar"
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
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sinister Fog",
				fr: "Brouillard Sinistre",
				es: "Niebla Siniestra",
				it: "Bruma Sinistra",
				pt: "Névoa Sinistra",
				de: "Nebel des Grauens"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent's Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 1 marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 1 contador de daño en cada uno de los Pokémon en Banca de tu rival.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti un segnalino danno su ciascuno dei Pokémon nella panchina del tuo avversario.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 1 contador de danos em cada um dos Pokémon no Banco do seu oponente.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Creep Show",
				fr: "Spectacle Perturbant",
				es: "Espectáculo Escalofriante",
				it: "Scuola di Mostri",
				pt: "Show de Horrores",
				de: "Gruselkabinett"
			},
			effect: {
				en: "If your opponent's Active Pokémon has 3 or more damage counters on it, that Pokémon is Knocked Out.",
				fr: "Si le Pokémon Actif de votre adversaire a 3 marqueurs de dégâts ou plus, ce dernier est mis K.O.",
				es: "Si el Pokémon Activo de tu rival tiene 3 o más contadores de daño sobre él, ese Pokémon queda Fuera de Combate.",
				it: "Se il Pokémon attivo del tuo avversario ha tre o più segnalini danno, viene messo KO.",
				pt: "Se o Pokémon Ativo do seu oponente possuir 3 ou mais contadores de danos, aquele Pokémon será Nocauteado.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 3 Schadensmarken liegen, wird jenes Pokémon kampfunfähig."
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

	thirdParty: {
		cardmarket: 286306
	}
}

export default card
