import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Drapion V",
		fr: "Drascore V",
		es: "Drapion V",
		it: "Drapion V",
		pt: "Drapion V",
		de: "Piondragi V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrack Down",
				fr: "Réduire en Poussière",
				es: "Desmoronar",
				it: "Abbattere",
				pt: "Desmoronar",
				de: "Niederschleudern"
			},

			damage: 70,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hazardous Claws",
				fr: "Griffes Nocives",
				es: "Zarpas Nocivas",
				it: "Artigli Insidiosi",
				pt: "Garras Perigosas",
				de: "Bedrohliche Krallen"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				es: "Descarta 2 Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
				it: "Scarta due Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				pt: "Descarte 2 Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 511950,
		tcgplayer: 226559
	}
}

export default card
