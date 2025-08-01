import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [854],

	name: {
		en: "Sinistea",
		fr: "Théffroi",
		es: "Sinistea",
		it: "Sinistea",
		pt: "Sinistea",
		de: "Fatalitee"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Furtive Drop",
				fr: "Chute Furtive",
				es: "Caída Furtiva",
				it: "Lascito Furtivo",
				pt: "Gota Furtiva",
				de: "Hinterhältiger Fall"
			},
			effect: {
				en: "Put 2 damage counters on your opponent's Active Pokémon.",
				fr: "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 2 contadores de daño en el Pokémon Activo de tu rival.",
				it: "Metti due segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente.",
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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "This Pokémon is said to have been born when a lonely spirit possessed a cold, leftover cup of tea."
	},

	thirdParty: {
		cardmarket: 483289
	}
}

export default card
