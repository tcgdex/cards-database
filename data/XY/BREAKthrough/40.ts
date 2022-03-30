import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		460,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Age",
				fr: "Période Glaciaire",
				es: "Era de Hielo",
				it: "Era Glaciale",
				pt: "Era do Gelo",
				de: "Eiszeitalter"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Dragon Pokémon, it is now Paralyzed.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, il est maintenant Paralysé.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Dragon, este pasa a estar Paralizado.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Dragon, viene paralizzato.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Dragon, ele será Paralisado.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Dragon-Pokémon ist, ist es jetzt paralysiert."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Breath",
				fr: "Souffle Glacé",
				es: "Vaho Gélido",
				it: "Alitogelido",
				pt: "Respiração de Gelo",
				de: "Eisesodem"
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
