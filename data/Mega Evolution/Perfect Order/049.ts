import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		de: "Alpollo",
		it: "Haunter",
		pt: "Haunter"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		93
	],
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		"es-mx": "Gastly",
		de: "Nebulak",
		it: "Gastly",
		pt: "Gastly"
	},
	attacks: [
		{
			cost: [
				"Darkness"
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
				es: "Espanto",
				de: "Spuk",
				it: "Infestare",
				pt: "Assombrar"
			},
			effect: {
				en: "Place 3 damage counters on your opponent's Active Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				de: "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners.",
				it: "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 3 contadores de dano no Pokémon Ativo do seu oponente."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Kedamahadaitai Yawarakai",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684430,
		cardmarket: 877464
	}
}

export default card
