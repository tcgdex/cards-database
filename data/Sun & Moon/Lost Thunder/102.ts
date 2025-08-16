import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	stage: "Stage1",

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
				en: "Put 3 damage counters on your opponent’s Active Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				it: "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 3 contadores de dano no Pokémon Ativo do seu oponente.",
				de: "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners."
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
		cardmarket: 365739,
		tcgplayer: 178915
	}
}

export default card
