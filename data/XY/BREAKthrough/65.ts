import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
				es: "Espanto",
				it: "Infestare",
				pt: "Assombrar",
				de: "Spuk"
			},
			effect: {
				en: "Put 2 damage counters on your opponent's Active Pokémon.",
				fr: "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 2 contadores de daño en el Pokémon Activo de tu rival.",
				it: "Metti due segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 2 contadores de danos no Pokémon Ativo do seu oponente.",
				de: "Lege 2 Schadensmarken auf das Aktive Pokémon deines Gegners."
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

	retreat: 1,

	thirdParty: {
		cardmarket: 286311
	}
}

export default card
