import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Yamask",
		fr: "Tutafeh",
		es: "Yamask",
		it: "Yamask",
		pt: "Yamask",
		de: "Makabaja"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		562,
	],

	hp: 70,

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
				en: "Put 1 damage counter on your opponent’s Active Pokémon.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
				de: "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
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
		cardmarket: 365736,
		tcgplayer: 178912
	}
}

export default card
